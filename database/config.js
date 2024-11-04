



const config=  {
    user: 'sa',
    password: 'pk',
    server: 'SERVIDORNEW', // Puede ser una IP o nombre del servidor
    database: 'versionesBD',
    port: 1433,
    options: {
        encrypt: false, // Usa `true` si tu servidor requiere encriptación
        trustServerCertificate: false // Usa `true` si confías en el certificado del servidor
    }
};

module.exports = { config };