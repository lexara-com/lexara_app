import type { APIRoute } from "astro";
import { buildSubmission, safeReturnPath, submitContact } from "../../lib/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  let returnTo = "/contact";
  try {
    const fd = await request.formData();
    returnTo = safeReturnPath(fd.get("return"));
    const status = await submitContact(buildSubmission(fd));
    return redirect(`${returnTo}?contact=${status}#contact-form`, 303);
  } catch (err) {
    console.error("[contact] submit failed:", err instanceof Error ? err.message : err);
    return redirect(`${returnTo}?contact=error#contact-form`, 303);
  }
};
