const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        })
    ]
});

/**
 * Creates a structured log entry.
 *
 * @param {string} message - The main log message.
 * @param {object} details - An object containing detailed information.
 * @param {string} details.execution_step - The current step in the execution process.
 * @param {string} [details.data_source] - The source of the data being processed.
 * @param {string} [details.data_destination] - The destination of the data being moved.
 * @param {string} [details.file_operation] - The file operation being performed (e.g., 'create', 'delete').
 * @param {string} [details.file_path] - The path of the file being operated on.
 * @param {object} [details.calculation] - Details of any calculations being performed.
 */
const log = (level, message, details) => {
    logger.log(level, message, { details });
};

module.exports = {
    log,
    info: (message, details) => log('info', message, details),
    warn: (message, details) => log('warn', message, details),
    error: (message, details) => log('error', message, details)
};
