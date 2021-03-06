import fs from 'fs';
import ini from 'ini';
import path from 'path';
import yaml from 'js-yaml';

const getFullPath = (filePath) => {
  const currentDir = process.cwd();
  const fullPath = path.resolve(currentDir, filePath);

  return fullPath;
};

const parseFile = (filePath) => {
  const pathToFile = getFullPath(filePath);
  const data = fs.readFileSync(pathToFile, 'utf8');
  const format = path.extname(pathToFile);

  let parse;

  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  } else if (format === '.ini') {
    parse = ini.parse;
  }

  return parse(data);
};

export default parseFile;
