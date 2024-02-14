import { thirdWebService } from "@roccaweb/lib/services/thirdweb";

export const { ThirdwebAuthHandler, getUser } = thirdWebService();

export default ThirdwebAuthHandler();