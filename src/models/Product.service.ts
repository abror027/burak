import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel
    }

    /** SPA => Single Page Application  */

    /** SSR => Backend Server Sait Rendering*/

    public async getAllProducts(): Promise<Product[]> /**lengthni tekshirish kerak (length = 0 kabi) */ {
        const result = await this.productModel.find().exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        
        return result;
    }

    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input)
        } catch (err) {
            console.error("Error, model:createNewProduct:", err)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
        }
    }

    public async updateChoosenProduct(
        id: string,
        input: ProductUpdateInput
    ): Promise<Product> {
        // string => obj_Id
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel.findByIdAndUpdate({ _id: id }, input, { new: true }).exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result
    }



}

export default ProductService;