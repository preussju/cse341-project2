const isAuthenticated = (req, res, next) => {
    console.log('--- auth check on', req.method, req.originalUrl, '---');
    console.log('session ID:', req.sessionID);
    console.log('session contents:', req.session);

    if (req.session.user === undefined) {
        console.log('BLOCKED - no session.user');
        return res.status(401).json("You do not have access");
    }
    console.log('ALLOWED - session.user:', req.session.user);
    next();
};

module.exports = { isAuthenticated };