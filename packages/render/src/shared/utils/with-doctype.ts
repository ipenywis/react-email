export const DEFAULT_DOCTYPE =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';

export const withDoctype = (
  html: string,
  doctype: string | false = DEFAULT_DOCTYPE,
): string => {
  const body = html.replace(/<!DOCTYPE.*?>/i, '');
  return doctype === false ? body : `${doctype}${body}`;
};
