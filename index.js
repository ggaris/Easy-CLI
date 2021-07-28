import fs from 'fs'
import inquirer from 'inquirer'
import createIndexTemplate  from './createIndexTemplate.js'

const r = await inquirer
.prompt([
  {
    type:'input',
    name:'packageName',
    default:'easy-project',
    message:'set package name👉'
  }
])

console.log(r);


const inputConfig = {
  packageName:r.packageName,
  port:8080,
  middleware:{
    static:true,
    router:true
  }
}


fs.mkdirSync(`${getRootPath()}`);

fs.writeFileSync(`${getRootPath()}/index.js`,createIndexTemplate(inputConfig));

fs.writeFileSync(`${getRootPath()}/package.json`,'index');

function getRootPath(){
  return `./${inputConfig.packageName}`
}