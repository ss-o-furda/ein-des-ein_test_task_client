import { CLASSES_SEARCH_PARAM } from "../../utils/constants";

export const modifySearchParams = (
  prev: URLSearchParams,
  className: string
) => {
  const prevClasses = prev.get(CLASSES_SEARCH_PARAM)?.split(",");
  if (!prevClasses || prevClasses.length === 0) {
    return { [CLASSES_SEARCH_PARAM]: className };
  }

  const classIdx = prevClasses.indexOf(className);
  if (classIdx === -1) {
    prevClasses.push(className);
  } else {
    prevClasses.splice(classIdx, 1);
  }
  if (prevClasses.length === 0) return "";

  return { [CLASSES_SEARCH_PARAM]: prevClasses.join(",") };
};
