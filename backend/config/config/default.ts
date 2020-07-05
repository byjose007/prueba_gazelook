  
import path from 'path'

// const logPath = path.join(__dirname, '../logs/development.log')

export default () => ({
	env: process.env.ENV,
	host: process.env.HOST,
	port: process.env.PORT,
    mongo: {
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        path: process.env.MONGO_PATH,
    },
    // logging: {
    //     state: true,
    //     config: {
    //         appenders: { cheese: { type: 'file', filename: logPath } },
    //         categories: { default: { appenders: ['cheese'], level: 'error' }, info: { appenders: ['cheese'], level: 'info' } }
    //     }
    // }
});