const router = require("express").Router();
const orderRoutes = require("./order-processing");
const categoryRoutes = require("./category-route");
//**Kevin Code */
const userRoutes = require('./user');//


router.use("/order", orderRoutes);
router.use("/category", categoryRoutes);

//**Kevin Code */
router.use('/user', userRoutes);

router.use(function(req, res){
    res.json({"api":"true"});
})//

module.exports = router;
