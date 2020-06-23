const adminauthenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      console.log("user");
      if (req.user.scope.includes("admin")) next();

      res.sendStatus(401);
    });
  } else {
    res.sendStatus(401);
  }
};
