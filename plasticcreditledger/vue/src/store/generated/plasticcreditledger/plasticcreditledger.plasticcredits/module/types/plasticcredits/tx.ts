/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.plasticcredits";

export interface MsgCreateIssuer {
  creator: string;
  addr: string;
  name: string;
}

export interface MsgCreateIssuerResponse {}

export interface MsgUpdateIssuer {
  creator: string;
  addr: string;
  name: string;
}

export interface MsgUpdateIssuerResponse {}

export interface MsgDeleteIssuer {
  creator: string;
  addr: string;
}

export interface MsgDeleteIssuerResponse {}

const baseMsgCreateIssuer: object = { creator: "", addr: "", name: "" };

export const MsgCreateIssuer = {
  encode(message: MsgCreateIssuer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIssuer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIssuer {
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateIssuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgCreateIssuerResponse: object = {};

export const MsgCreateIssuerResponse = {
  encode(_: MsgCreateIssuerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
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

  fromJSON(_: any): MsgCreateIssuerResponse {
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },

  toJSON(_: MsgCreateIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateIssuerResponse>
  ): MsgCreateIssuerResponse {
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },
};

const baseMsgUpdateIssuer: object = { creator: "", addr: "", name: "" };

export const MsgUpdateIssuer = {
  encode(message: MsgUpdateIssuer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIssuer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateIssuer } as MsgUpdateIssuer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateIssuer {
    const message = { ...baseMsgUpdateIssuer } as MsgUpdateIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateIssuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateIssuer>): MsgUpdateIssuer {
    const message = { ...baseMsgUpdateIssuer } as MsgUpdateIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    return message;
  },
};

const baseMsgUpdateIssuerResponse: object = {};

export const MsgUpdateIssuerResponse = {
  encode(_: MsgUpdateIssuerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateIssuerResponse,
    } as MsgUpdateIssuerResponse;
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

  fromJSON(_: any): MsgUpdateIssuerResponse {
    const message = {
      ...baseMsgUpdateIssuerResponse,
    } as MsgUpdateIssuerResponse;
    return message;
  },

  toJSON(_: MsgUpdateIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateIssuerResponse>
  ): MsgUpdateIssuerResponse {
    const message = {
      ...baseMsgUpdateIssuerResponse,
    } as MsgUpdateIssuerResponse;
    return message;
  },
};

const baseMsgDeleteIssuer: object = { creator: "", addr: "" };

export const MsgDeleteIssuer = {
  encode(message: MsgDeleteIssuer, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIssuer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteIssuer } as MsgDeleteIssuer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteIssuer {
    const message = { ...baseMsgDeleteIssuer } as MsgDeleteIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteIssuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteIssuer>): MsgDeleteIssuer {
    const message = { ...baseMsgDeleteIssuer } as MsgDeleteIssuer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseMsgDeleteIssuerResponse: object = {};

export const MsgDeleteIssuerResponse = {
  encode(_: MsgDeleteIssuerResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteIssuerResponse,
    } as MsgDeleteIssuerResponse;
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

  fromJSON(_: any): MsgDeleteIssuerResponse {
    const message = {
      ...baseMsgDeleteIssuerResponse,
    } as MsgDeleteIssuerResponse;
    return message;
  },

  toJSON(_: MsgDeleteIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteIssuerResponse>
  ): MsgDeleteIssuerResponse {
    const message = {
      ...baseMsgDeleteIssuerResponse,
    } as MsgDeleteIssuerResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
  UpdateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteIssuer(request: MsgDeleteIssuer): Promise<MsgDeleteIssuerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "CreateIssuer",
      data
    );
    return promise.then((data) =>
      MsgCreateIssuerResponse.decode(new Reader(data))
    );
  }

  UpdateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse> {
    const data = MsgUpdateIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "UpdateIssuer",
      data
    );
    return promise.then((data) =>
      MsgUpdateIssuerResponse.decode(new Reader(data))
    );
  }

  DeleteIssuer(request: MsgDeleteIssuer): Promise<MsgDeleteIssuerResponse> {
    const data = MsgDeleteIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "DeleteIssuer",
      data
    );
    return promise.then((data) =>
      MsgDeleteIssuerResponse.decode(new Reader(data))
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
