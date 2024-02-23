import chalk from "chalk";

const catchLog = (path: string, err: any) => {
  console.log(chalk.redBright(`error occured in ${path}: `, err));
};

export default catchLog;
