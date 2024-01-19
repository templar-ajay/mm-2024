export function getLinkOfAlternatePage(pathname, alternate_uid) {
  console.log("pathname", pathname);
  console.log("alternate_uid", alternate_uid);
  let alternateUID = alternate_uid == "homepage" ? "" : alternate_uid;
  let alternatePathName = "";
  if (pathname.includes("/es")) {
    alternatePathName += "/";
  } else {
    alternatePathName += "/es";
  }
  if (pathname.includes("/blog")) {
    alternatePathName += "/blog";
  }
  alternatePathName += "/" + alternateUID;
  alternatePathName.replaceAll("//", "/");
  alternatePathName.replaceAll("//", "/");
  return alternatePathName;
}
