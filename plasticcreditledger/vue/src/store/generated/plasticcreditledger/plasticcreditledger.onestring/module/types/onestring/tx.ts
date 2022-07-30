/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.onestring";

export interface MsgCreateThestring {
  creator: string;
  valueofthestring: string;
}

export interface MsgCreateThestringResponse {}

export interface MsgUpdateThestring {
  creator: string;
  valueofthestring: string;
}

export interface MsgUpdateThestringResponse {}

export interface MsgDeleteThestring {
  creator: string;
}

export interface MsgDeleteThestringResponse {}

const baseMsgCreateThestring: object = { creator: "", valueofthestring: "" };

export const MsgCreateThestring = {
  encode(
    message: MsgCreateThestring,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.valueofthestring !== "") {
      writer.uint32(26).string(message.valueofthestring);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThestring {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateThestring } as MsgCreateThestring;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.valueofthestring = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThestring {
    const message = { ...baseMsgCreateThestring } as MsgCreateThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = String(object.valueofthestring);
    } else {
      message.valueofthestring = "";
    }
    return message;
  },

  toJSON(message: MsgCreateThestring): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.valueofthestring !== undefined &&
      (obj.valueofthestring = message.valueofthestring);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateThestring>): MsgCreateThestring {
    const message = { ...baseMsgCreateThestring } as MsgCreateThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = object.valueofthestring;
    } else {
      message.valueofthestring = "";
    }
    return message;
  },
};

const baseMsgCreateThestringResponse: object = {};

export const MsgCreateThestringResponse = {
  encode(
    _: MsgCreateThestringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateThestringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateThestringResponse,
    } as MsgCreateThestringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateThestringResponse {
    const message = {
      ...baseMsgCreateThestringResponse,
    } as MsgCreateThestringResponse;
    return message;
  },

  toJSON(_: MsgCreateThestringResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateThestringResponse>
  ): MsgCreateThestringResponse {
    const message = {
      ...baseMsgCreateThestringResponse,
    } as MsgCreateThestringResponse;
    return message;
  },
};

const baseMsgUpdateThestring: object = { creator: "", valueofthestring: "" };

export const MsgUpdateThestring = {
  encode(
    message: MsgUpdateThestring,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.valueofthestring !== "") {
      writer.uint32(26).string(message.valueofthestring);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateThestring {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateThestring } as MsgUpdateThestring;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.valueofthestring = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateThestring {
    const message = { ...baseMsgUpdateThestring } as MsgUpdateThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = String(object.valueofthestring);
    } else {
      message.valueofthestring = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateThestring): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.valueofthestring !== undefined &&
      (obj.valueofthestring = message.valueofthestring);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateThestring>): MsgUpdateThestring {
    const message = { ...baseMsgUpdateThestring } as MsgUpdateThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.valueofthestring !== undefined &&
      object.valueofthestring !== null
    ) {
      message.valueofthestring = object.valueofthestring;
    } else {
      message.valueofthestring = "";
    }
    return message;
  },
};

const baseMsgUpdateThestringResponse: object = {};

export const MsgUpdateThestringResponse = {
  encode(
    _: MsgUpdateThestringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateThestringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateThestringResponse,
    } as MsgUpdateThestringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateThestringResponse {
    const message = {
      ...baseMsgUpdateThestringResponse,
    } as MsgUpdateThestringResponse;
    return message;
  },

  toJSON(_: MsgUpdateThestringResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateThestringResponse>
  ): MsgUpdateThestringResponse {
    const message = {
      ...baseMsgUpdateThestringResponse,
    } as MsgUpdateThestringResponse;
    return message;
  },
};

const baseMsgDeleteThestring: object = { creator: "" };

export const MsgDeleteThestring = {
  encode(
    message: MsgDeleteThestring,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteThestring {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteThestring } as MsgDeleteThestring;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteThestring {
    const message = { ...baseMsgDeleteThestring } as MsgDeleteThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteThestring): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteThestring>): MsgDeleteThestring {
    const message = { ...baseMsgDeleteThestring } as MsgDeleteThestring;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteThestringResponse: object = {};

export const MsgDeleteThestringResponse = {
  encode(
    _: MsgDeleteThestringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteThestringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteThestringResponse,
    } as MsgDeleteThestringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteThestringResponse {
    const message = {
      ...baseMsgDeleteThestringResponse,
    } as MsgDeleteThestringResponse;
    return message;
  },

  toJSON(_: MsgDeleteThestringResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteThestringResponse>
  ): MsgDeleteThestringResponse {
    const message = {
      ...baseMsgDeleteThestringResponse,
    } as MsgDeleteThestringResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateThestring(
    request: MsgCreateThestring
  ): Promise<MsgCreateThestringResponse>;
  UpdateThestring(
    request: MsgUpdateThestring
  ): Promise<MsgUpdateThestringResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteThestring(
    request: MsgDeleteThestring
  ): Promise<MsgDeleteThestringResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateThestring(
    request: MsgCreateThestring
  ): Promise<MsgCreateThestringResponse> {
    const data = MsgCreateThestring.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.onestring.Msg",
      "CreateThestring",
      data
    );
    return promise.then((data) =>
      MsgCreateThestringResponse.decode(new Reader(data))
    );
  }

  UpdateThestring(
    request: MsgUpdateThestring
  ): Promise<MsgUpdateThestringResponse> {
    const data = MsgUpdateThestring.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.onestring.Msg",
      "UpdateThestring",
      data
    );
    return promise.then((data) =>
      MsgUpdateThestringResponse.decode(new Reader(data))
    );
  }

  DeleteThestring(
    request: MsgDeleteThestring
  ): Promise<MsgDeleteThestringResponse> {
    const data = MsgDeleteThestring.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.onestring.Msg",
      "DeleteThestring",
      data
    );
    return promise.then((data) =>
      MsgDeleteThestringResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
