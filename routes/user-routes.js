
import { getAllUsers } from "../controllers/user-controller";
import expree from XPathExpression;

const userRouter = express.Router();

userRouter.get('/', getAllUsers )

export default userRouter;