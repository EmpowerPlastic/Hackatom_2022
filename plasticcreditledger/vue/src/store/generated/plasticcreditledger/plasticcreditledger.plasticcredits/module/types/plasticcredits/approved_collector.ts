/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.plasticcredits";

export interface ApprovedCollector {
  addr: string;
  name: string;
  issuer: string;
  creator: string;
}

const baseApprovedCollector: object = {
  addr: "",
  name: "",
  issuer: "",
  creator: "",
};

export const ApprovedCollector = {
  encode(message: ApprovedCollector, writer: Writer = Writer.create()): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovedCollector {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprovedCollector } as ApprovedCollector;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApprovedCollector {
    const message = { ...baseApprovedCollector } as ApprovedCollector;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ApprovedCollector): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.name !== undefined && (obj.name = message.name);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<ApprovedCollector>): ApprovedCollector {
    const message = { ...baseApprovedCollector } as ApprovedCollector;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
