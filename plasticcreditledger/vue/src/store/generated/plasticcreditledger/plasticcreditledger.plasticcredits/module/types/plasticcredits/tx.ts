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

export interface MsgCreateApprovedCollector {
  creator: string;
  addr: string;
  issuer: string;
}

export interface MsgCreateApprovedCollectorResponse {}

export interface MsgUpdateApprovedCollector {
  creator: string;
  addr: string;
  issuer: string;
}

export interface MsgUpdateApprovedCollectorResponse {}

export interface MsgDeleteApprovedCollector {
  creator: string;
  addr: string;
  issuer: string;
}

export interface MsgDeleteApprovedCollectorResponse {}

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

const baseMsgCreateApprovedCollector: object = {
  creator: "",
  addr: "",
  issuer: "",
};

export const MsgCreateApprovedCollector = {
  encode(
    message: MsgCreateApprovedCollector,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateApprovedCollector {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateApprovedCollector,
    } as MsgCreateApprovedCollector;
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
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateApprovedCollector {
    const message = {
      ...baseMsgCreateApprovedCollector,
    } as MsgCreateApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    return message;
  },

  toJSON(message: MsgCreateApprovedCollector): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateApprovedCollector>
  ): MsgCreateApprovedCollector {
    const message = {
      ...baseMsgCreateApprovedCollector,
    } as MsgCreateApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    return message;
  },
};

const baseMsgCreateApprovedCollectorResponse: object = {};

export const MsgCreateApprovedCollectorResponse = {
  encode(
    _: MsgCreateApprovedCollectorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateApprovedCollectorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateApprovedCollectorResponse,
    } as MsgCreateApprovedCollectorResponse;
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

  fromJSON(_: any): MsgCreateApprovedCollectorResponse {
    const message = {
      ...baseMsgCreateApprovedCollectorResponse,
    } as MsgCreateApprovedCollectorResponse;
    return message;
  },

  toJSON(_: MsgCreateApprovedCollectorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateApprovedCollectorResponse>
  ): MsgCreateApprovedCollectorResponse {
    const message = {
      ...baseMsgCreateApprovedCollectorResponse,
    } as MsgCreateApprovedCollectorResponse;
    return message;
  },
};

const baseMsgUpdateApprovedCollector: object = {
  creator: "",
  addr: "",
  issuer: "",
};

export const MsgUpdateApprovedCollector = {
  encode(
    message: MsgUpdateApprovedCollector,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateApprovedCollector {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApprovedCollector,
    } as MsgUpdateApprovedCollector;
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
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateApprovedCollector {
    const message = {
      ...baseMsgUpdateApprovedCollector,
    } as MsgUpdateApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateApprovedCollector): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateApprovedCollector>
  ): MsgUpdateApprovedCollector {
    const message = {
      ...baseMsgUpdateApprovedCollector,
    } as MsgUpdateApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    return message;
  },
};

const baseMsgUpdateApprovedCollectorResponse: object = {};

export const MsgUpdateApprovedCollectorResponse = {
  encode(
    _: MsgUpdateApprovedCollectorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateApprovedCollectorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApprovedCollectorResponse,
    } as MsgUpdateApprovedCollectorResponse;
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

  fromJSON(_: any): MsgUpdateApprovedCollectorResponse {
    const message = {
      ...baseMsgUpdateApprovedCollectorResponse,
    } as MsgUpdateApprovedCollectorResponse;
    return message;
  },

  toJSON(_: MsgUpdateApprovedCollectorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateApprovedCollectorResponse>
  ): MsgUpdateApprovedCollectorResponse {
    const message = {
      ...baseMsgUpdateApprovedCollectorResponse,
    } as MsgUpdateApprovedCollectorResponse;
    return message;
  },
};

const baseMsgDeleteApprovedCollector: object = {
  creator: "",
  addr: "",
  issuer: "",
};

export const MsgDeleteApprovedCollector = {
  encode(
    message: MsgDeleteApprovedCollector,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteApprovedCollector {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteApprovedCollector,
    } as MsgDeleteApprovedCollector;
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
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteApprovedCollector {
    const message = {
      ...baseMsgDeleteApprovedCollector,
    } as MsgDeleteApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteApprovedCollector): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteApprovedCollector>
  ): MsgDeleteApprovedCollector {
    const message = {
      ...baseMsgDeleteApprovedCollector,
    } as MsgDeleteApprovedCollector;
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
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    return message;
  },
};

const baseMsgDeleteApprovedCollectorResponse: object = {};

export const MsgDeleteApprovedCollectorResponse = {
  encode(
    _: MsgDeleteApprovedCollectorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteApprovedCollectorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteApprovedCollectorResponse,
    } as MsgDeleteApprovedCollectorResponse;
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

  fromJSON(_: any): MsgDeleteApprovedCollectorResponse {
    const message = {
      ...baseMsgDeleteApprovedCollectorResponse,
    } as MsgDeleteApprovedCollectorResponse;
    return message;
  },

  toJSON(_: MsgDeleteApprovedCollectorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteApprovedCollectorResponse>
  ): MsgDeleteApprovedCollectorResponse {
    const message = {
      ...baseMsgDeleteApprovedCollectorResponse,
    } as MsgDeleteApprovedCollectorResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
  UpdateIssuer(request: MsgUpdateIssuer): Promise<MsgUpdateIssuerResponse>;
  DeleteIssuer(request: MsgDeleteIssuer): Promise<MsgDeleteIssuerResponse>;
  CreateApprovedCollector(
    request: MsgCreateApprovedCollector
  ): Promise<MsgCreateApprovedCollectorResponse>;
  UpdateApprovedCollector(
    request: MsgUpdateApprovedCollector
  ): Promise<MsgUpdateApprovedCollectorResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteApprovedCollector(
    request: MsgDeleteApprovedCollector
  ): Promise<MsgDeleteApprovedCollectorResponse>;
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

  CreateApprovedCollector(
    request: MsgCreateApprovedCollector
  ): Promise<MsgCreateApprovedCollectorResponse> {
    const data = MsgCreateApprovedCollector.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "CreateApprovedCollector",
      data
    );
    return promise.then((data) =>
      MsgCreateApprovedCollectorResponse.decode(new Reader(data))
    );
  }

  UpdateApprovedCollector(
    request: MsgUpdateApprovedCollector
  ): Promise<MsgUpdateApprovedCollectorResponse> {
    const data = MsgUpdateApprovedCollector.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "UpdateApprovedCollector",
      data
    );
    return promise.then((data) =>
      MsgUpdateApprovedCollectorResponse.decode(new Reader(data))
    );
  }

  DeleteApprovedCollector(
    request: MsgDeleteApprovedCollector
  ): Promise<MsgDeleteApprovedCollectorResponse> {
    const data = MsgDeleteApprovedCollector.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "DeleteApprovedCollector",
      data
    );
    return promise.then((data) =>
      MsgDeleteApprovedCollectorResponse.decode(new Reader(data))
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
