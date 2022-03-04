import express, {Router, Request, Response, NextFunction} from 'express';
const app: express.Application = express();
const router: Router = Router();
const {readFileContent} = require('../utils/fileOper')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/homepage/', require('./project'));



/* GET home page. */
// router.get('/', function (req: Request, res: Response, next: NextFunction) {
//     res.render('index', {title: 'Express'});
// });
//
//
// router.get('/readfile', async (req: Request, res: Response, next: NextFunction) => {
//     const data = await readFileContent('./assets/md/resume.md')
//     res.send({data})
// });

module.exports = app;
// export const Index: Router = router;
