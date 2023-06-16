const express = require("express")
const userSchema = require("../models/user")
const router = express.Router();


//login
router.post('/login', async (req, res) => {
        const { username, password } = req.body;

        try {
                // Buscar el usuario en la base de datos por el nombre de usuario
                const user = await userSchema.findOne({ username });
                console.log(user.username);
                console.log(user.password);
                console.log(req.body);
                // Verificar si se encontró un usuario y comparar la contraseña
                if (user.username == username && user.password == password) {
                        res.json({ message: 'valido' , user: user});
                } else {
                        res.status(401).json({ error: 'Credenciales inválidas' });
                }
        } catch (err) {
                res.status(500).json({ error: 'Error en el servidor' });
        }
});

//update password
router.put('/users/:username/update-password', async (req, res) => {
        const { username } = req.params;
        const { reservword, newPassword } = req.body;
      
        try {
          // Buscar el usuario en la base de datos por el nombre de usuario y la palabra reservada
          const user = await userSchema.findOne({ username, reservword });
      
          // Verificar si se encontró un usuario
          if (user) {
            // Actualizar la contraseña del usuario
            user.password = newPassword;
            await user.save();
      
            res.json({ message: 'Contraseña actualizada con éxito' });
          } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
          }
        } catch (err) {
          res.status(500).json({ error: 'Error en el servidor' });
        }
      });


//create user
router.post('/users', (req, res) => {
        const user = userSchema(req.body);
        console.log(req.body);
        user.save()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
})


//get all users
router.get('/users', (req, res) => {
        userSchema.find()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
})


module.exports = router;