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
  name: string;
  issuer: string;
}

export interface MsgCreateApprovedCollectorResponse {}

export interface MsgUpdateApprovedCollector {
  creator: string;
  addr: string;
  name: string;
  issuer: string;
}

export interface MsgUpdateApprovedCollectorResponse {}

export interface MsgDeleteApprovedCollector {
  creator: string;
  addr: string;
  issuer: string;
}

export interface MsgDeleteApprovedCollectorResponse {}

export interface MsgIssueCredits {
  issuer: string;
  collector: string;
  material: string;
  description: string;
  image: string;
  lat: string;
  lng: string;
}

export interface MsgIssueCreditsResponse {}

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
  name: "",
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
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
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
          message.name = reader.string();
          break;
        case 4:
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
    return message;
  },

  toJSON(message: MsgCreateApprovedCollector): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.name !== undefined && (obj.name = message.name);
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
  name: "",
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
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.issuer !== "") {
      writer.uint32(34).string(message.issuer);
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
          message.name = reader.string();
          break;
        case 4:
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
    return message;
  },

  toJSON(message: MsgUpdateApprovedCollector): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.name !== undefined && (obj.name = message.name);
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

const baseMsgIssueCredits: object = {
  issuer: "",
  collector: "",
  material: "",
  description: "",
  image: "",
  lat: "",
  lng: "",
};

export const MsgIssueCredits = {
  encode(message: MsgIssueCredits, writer: Writer = Writer.create()): Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.collector !== "") {
      writer.uint32(18).string(message.collector);
    }
    if (message.material !== "") {
      writer.uint32(26).string(message.material);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.image !== "") {
      writer.uint32(42).string(message.image);
    }
    if (message.lat !== "") {
      writer.uint32(50).string(message.lat);
    }
    if (message.lng !== "") {
      writer.uint32(58).string(message.lng);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueCredits {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueCredits } as MsgIssueCredits;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.collector = reader.string();
          break;
        case 3:
          message.material = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.image = reader.string();
          break;
        case 6:
          message.lat = reader.string();
          break;
        case 7:
          message.lng = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueCredits {
    const message = { ...baseMsgIssueCredits } as MsgIssueCredits;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.collector !== undefined && object.collector !== null) {
      message.collector = String(object.collector);
    } else {
      message.collector = "";
    }
    if (object.material !== undefined && object.material !== null) {
      message.material = String(object.material);
    } else {
      message.material = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    if (object.lat !== undefined && object.lat !== null) {
      message.lat = String(object.lat);
    } else {
      message.lat = "";
    }
    if (object.lng !== undefined && object.lng !== null) {
      message.lng = String(object.lng);
    } else {
      message.lng = "";
    }
    return message;
  },

  toJSON(message: MsgIssueCredits): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.collector !== undefined && (obj.collector = message.collector);
    message.material !== undefined && (obj.material = message.material);
    message.description !== undefined &&
      (obj.description = message.description);
    message.image !== undefined && (obj.image = message.image);
    message.lat !== undefined && (obj.lat = message.lat);
    message.lng !== undefined && (obj.lng = message.lng);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueCredits>): MsgIssueCredits {
    const message = { ...baseMsgIssueCredits } as MsgIssueCredits;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.collector !== undefined && object.collector !== null) {
      message.collector = object.collector;
    } else {
      message.collector = "";
    }
    if (object.material !== undefined && object.material !== null) {
      message.material = object.material;
    } else {
      message.material = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    if (object.lat !== undefined && object.lat !== null) {
      message.lat = object.lat;
    } else {
      message.lat = "";
    }
    if (object.lng !== undefined && object.lng !== null) {
      message.lng = object.lng;
    } else {
      message.lng = "";
    }
    return message;
  },
};

const baseMsgIssueCreditsResponse: object = {};

export const MsgIssueCreditsResponse = {
  encode(_: MsgIssueCreditsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueCreditsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIssueCreditsResponse,
    } as MsgIssueCreditsResponse;
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

  fromJSON(_: any): MsgIssueCreditsResponse {
    const message = {
      ...baseMsgIssueCreditsResponse,
    } as MsgIssueCreditsResponse;
    return message;
  },

  toJSON(_: MsgIssueCreditsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIssueCreditsResponse>
  ): MsgIssueCreditsResponse {
    const message = {
      ...baseMsgIssueCreditsResponse,
    } as MsgIssueCreditsResponse;
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
  DeleteApprovedCollector(
    request: MsgDeleteApprovedCollector
  ): Promise<MsgDeleteApprovedCollectorResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  IssueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse>;
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

  IssueCredits(request: MsgIssueCredits): Promise<MsgIssueCreditsResponse> {
    const data = MsgIssueCredits.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Msg",
      "IssueCredits",
      data
    );
    return promise.then((data) =>
      MsgIssueCreditsResponse.decode(new Reader(data))
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
