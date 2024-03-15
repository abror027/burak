import path from "path";
import multer from "multer";
import { v4 } from 'uuid';

/** MULTER IMAGE UPLOADER dinamik hamma joyda yuklashga ruxsat berish qayta qayta yozish shart emas*/
function getTargetImageStorage(address: any) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file, cb) {
            const extension = path.parse(file.originalname).ext;
            const random_name = v4() + extension;
            cb(null, random_name);
        },
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage });
};
export default makeUploader;


/* faqat bitta joyga yuklaymiz
const product_storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/products');
    },
    filename: function (req, file, cb) {
        console.log(file);
        const extension = path.parse(file.originalname).ext;
        const randome_name = v4() + extension;
        cb(null, randome_name);
    },
});

export const uploadProductImage = multer({ storage: product_storage }); */