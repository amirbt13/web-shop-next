const catchLog = (path: string, err: any) => {
  console.log(`error occured in ${path}: `, err);
};

export default catchLog;
