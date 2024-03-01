import mongoose, {Schema} from "mongoose";
import { memberStatus } from "../libs/enums/member.enum";
import { MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: memberStatus,
        default: memberStatus.ACTIVE
    }, 
    
    memberNick: {
        type: String,
        index: { uniqe: true, sparse: true },
        require: true,
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        require: true,
    },

    memberPassword: {
        type: String,
        select: false,
        required: true
    },

    memberAddress: {
        type: String,
    },
    memberDesc: {
        type: String,
    },
    memberImage: {
        type: String,
    },
    memberPoints: {
        type: Number,
        default: 0,
    },
},
{ timestamps: true } // updateAt, createdAt
);

export default mongoose.model("Member", memberSchema);
