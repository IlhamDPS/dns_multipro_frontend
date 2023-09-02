type IsSideMenuActiveProps = {
  currentPath: string;
  link: string;
};

const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const convertRoutePathToArray = (pathname: string): string[] => {
  return pathname
    .split('/')
    .filter((route) => route.length !== 0)
    .map((route) => {
      const split = route.split('_');

      /// Route => user_group become User Group
      if (split.length > 1) {
        const capitalizeName = split.map((val) => (val[0]?.toUpperCase() ?? 'default') + val.slice(1));

        return capitalizeName.join(' ');
      }

      return route;
    });
};

const convertObjectIntoQueryParams = (queryParam: any) => {
  if (!queryParam) return '';

  const params =
    '?' +
    Object.keys(queryParam)
      .map((key) => key + '=' + queryParam[key])
      .join('&');

  return params;
};

const isSideMenuActive = ({ currentPath, link }: IsSideMenuActiveProps) => {
  const arrCurrentPath = currentPath.split('/').filter((item) => item !== '');
  const arrLink = link.split('/').filter((item) => item !== '');

  const lenArrLink = arrLink.length;

  let isEqual = false;
  let counterPathEqual = 0;

  for (let i = 0; i < lenArrLink; i++) {
    const isSamePath = arrLink[i] === arrCurrentPath[i];
    if (isSamePath) counterPathEqual += 1;
  }

  if (counterPathEqual === lenArrLink) isEqual = true;

  return isEqual;
};

export { sleep, convertRoutePathToArray, convertObjectIntoQueryParams, isSideMenuActive };
