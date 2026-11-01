// House style: after "Lexara", the product names Engage and Access are always
// italic ("Lexara *Engage*", "Lexara *Access*"). Applying it to the finished page
// means editors never have to remember it in the CMS.
//
// Only visible body text is changed. Tag attributes (alt, title, href), the
// <head>, scripts, styles, form fields and code, and text already inside
// <em>/<i>, are left alone.

const PRODUCT = /\bLexara(\s|&nbsp;)+(Engage|Access)\b/g;
const SKIP_TAGS = new Set(["script", "style", "textarea", "option", "select", "code", "pre", "title", "svg"]);
const ITALIC_TAGS = new Set(["em", "i"]);
const TOKEN = /<!--[\s\S]*?-->|<[^>]*>|[^<]+/g;
const TAG_NAME = /^<\/?\s*([a-zA-Z0-9-]+)/;

export function italicizeProductNames(html: string): string {
	const bodyStart = html.search(/<body[\s>]/i);
	if (bodyStart < 0 || !PRODUCT.test(html)) return html;
	PRODUCT.lastIndex = 0;

	let out = html.slice(0, bodyStart);
	let skipDepth = 0;
	let italicDepth = 0;

	for (const token of html.slice(bodyStart).match(TOKEN) ?? []) {
		if (token.startsWith("<")) {
			const name = TAG_NAME.exec(token)?.[1]?.toLowerCase();
			const closing = token.startsWith("</");
			const selfClosing = token.endsWith("/>");
			if (name && !selfClosing) {
				const delta = closing ? -1 : 1;
				if (SKIP_TAGS.has(name)) skipDepth = Math.max(0, skipDepth + delta);
				if (ITALIC_TAGS.has(name)) italicDepth = Math.max(0, italicDepth + delta);
			}
			out += token;
		} else {
			out += skipDepth || italicDepth ? token : token.replace(PRODUCT, (_m, space, product) => `Lexara${space}<em>${product}</em>`);
		}
	}
	return out;
}
