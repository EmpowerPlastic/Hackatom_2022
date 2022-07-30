/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../plasticcredits/params";
import { Issuer } from "../plasticcredits/issuer";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ApprovedCollector } from "../plasticcredits/approved_collector";
import { Credit } from "../plasticcredits/credit";

export const protobufPackage = "plasticcreditledger.plasticcredits";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetIssuerRequest {
  addr: string;
}

export interface QueryGetIssuerResponse {
  issuer: Issuer | undefined;
}

export interface QueryAllIssuerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllIssuerResponse {
  issuer: Issuer[];
  pagination: PageResponse | undefined;
}

export interface QueryGetApprovedCollectorRequest {
  addr: string;
  issuer: string;
}

export interface QueryGetApprovedCollectorResponse {
  approvedCollector: ApprovedCollector | undefined;
}

export interface QueryAllApprovedCollectorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApprovedCollectorResponse {
  approvedCollector: ApprovedCollector[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCreditRequest {
  index: string;
}

export interface QueryGetCreditResponse {
  credit: Credit | undefined;
}

export interface QueryAllCreditRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCreditResponse {
  credit: Credit[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetIssuerRequest: object = { addr: "" };

export const QueryGetIssuerRequest = {
  encode(
    message: QueryGetIssuerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetIssuerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetIssuerRequest } as QueryGetIssuerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIssuerRequest {
    const message = { ...baseQueryGetIssuerRequest } as QueryGetIssuerRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: QueryGetIssuerRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIssuerRequest>
  ): QueryGetIssuerRequest {
    const message = { ...baseQueryGetIssuerRequest } as QueryGetIssuerRequest;
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseQueryGetIssuerResponse: object = {};

export const QueryGetIssuerResponse = {
  encode(
    message: QueryGetIssuerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.issuer !== undefined) {
      Issuer.encode(message.issuer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetIssuerResponse } as QueryGetIssuerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = Issuer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetIssuerResponse {
    const message = { ...baseQueryGetIssuerResponse } as QueryGetIssuerResponse;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = Issuer.fromJSON(object.issuer);
    } else {
      message.issuer = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetIssuerResponse): unknown {
    const obj: any = {};
    message.issuer !== undefined &&
      (obj.issuer = message.issuer ? Issuer.toJSON(message.issuer) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetIssuerResponse>
  ): QueryGetIssuerResponse {
    const message = { ...baseQueryGetIssuerResponse } as QueryGetIssuerResponse;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = Issuer.fromPartial(object.issuer);
    } else {
      message.issuer = undefined;
    }
    return message;
  },
};

const baseQueryAllIssuerRequest: object = {};

export const QueryAllIssuerRequest = {
  encode(
    message: QueryAllIssuerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllIssuerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllIssuerRequest } as QueryAllIssuerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIssuerRequest {
    const message = { ...baseQueryAllIssuerRequest } as QueryAllIssuerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIssuerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIssuerRequest>
  ): QueryAllIssuerRequest {
    const message = { ...baseQueryAllIssuerRequest } as QueryAllIssuerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllIssuerResponse: object = {};

export const QueryAllIssuerResponse = {
  encode(
    message: QueryAllIssuerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.issuer) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllIssuerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllIssuerResponse } as QueryAllIssuerResponse;
    message.issuer = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer.push(Issuer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllIssuerResponse {
    const message = { ...baseQueryAllIssuerResponse } as QueryAllIssuerResponse;
    message.issuer = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      for (const e of object.issuer) {
        message.issuer.push(Issuer.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllIssuerResponse): unknown {
    const obj: any = {};
    if (message.issuer) {
      obj.issuer = message.issuer.map((e) =>
        e ? Issuer.toJSON(e) : undefined
      );
    } else {
      obj.issuer = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllIssuerResponse>
  ): QueryAllIssuerResponse {
    const message = { ...baseQueryAllIssuerResponse } as QueryAllIssuerResponse;
    message.issuer = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      for (const e of object.issuer) {
        message.issuer.push(Issuer.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetApprovedCollectorRequest: object = { addr: "", issuer: "" };

export const QueryGetApprovedCollectorRequest = {
  encode(
    message: QueryGetApprovedCollectorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApprovedCollectorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovedCollectorRequest,
    } as QueryGetApprovedCollectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovedCollectorRequest {
    const message = {
      ...baseQueryGetApprovedCollectorRequest,
    } as QueryGetApprovedCollectorRequest;
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

  toJSON(message: QueryGetApprovedCollectorRequest): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovedCollectorRequest>
  ): QueryGetApprovedCollectorRequest {
    const message = {
      ...baseQueryGetApprovedCollectorRequest,
    } as QueryGetApprovedCollectorRequest;
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

const baseQueryGetApprovedCollectorResponse: object = {};

export const QueryGetApprovedCollectorResponse = {
  encode(
    message: QueryGetApprovedCollectorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.approvedCollector !== undefined) {
      ApprovedCollector.encode(
        message.approvedCollector,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApprovedCollectorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApprovedCollectorResponse,
    } as QueryGetApprovedCollectorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvedCollector = ApprovedCollector.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApprovedCollectorResponse {
    const message = {
      ...baseQueryGetApprovedCollectorResponse,
    } as QueryGetApprovedCollectorResponse;
    if (
      object.approvedCollector !== undefined &&
      object.approvedCollector !== null
    ) {
      message.approvedCollector = ApprovedCollector.fromJSON(
        object.approvedCollector
      );
    } else {
      message.approvedCollector = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetApprovedCollectorResponse): unknown {
    const obj: any = {};
    message.approvedCollector !== undefined &&
      (obj.approvedCollector = message.approvedCollector
        ? ApprovedCollector.toJSON(message.approvedCollector)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApprovedCollectorResponse>
  ): QueryGetApprovedCollectorResponse {
    const message = {
      ...baseQueryGetApprovedCollectorResponse,
    } as QueryGetApprovedCollectorResponse;
    if (
      object.approvedCollector !== undefined &&
      object.approvedCollector !== null
    ) {
      message.approvedCollector = ApprovedCollector.fromPartial(
        object.approvedCollector
      );
    } else {
      message.approvedCollector = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovedCollectorRequest: object = {};

export const QueryAllApprovedCollectorRequest = {
  encode(
    message: QueryAllApprovedCollectorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllApprovedCollectorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovedCollectorRequest,
    } as QueryAllApprovedCollectorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllApprovedCollectorRequest {
    const message = {
      ...baseQueryAllApprovedCollectorRequest,
    } as QueryAllApprovedCollectorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovedCollectorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovedCollectorRequest>
  ): QueryAllApprovedCollectorRequest {
    const message = {
      ...baseQueryAllApprovedCollectorRequest,
    } as QueryAllApprovedCollectorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllApprovedCollectorResponse: object = {};

export const QueryAllApprovedCollectorResponse = {
  encode(
    message: QueryAllApprovedCollectorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.approvedCollector) {
      ApprovedCollector.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllApprovedCollectorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApprovedCollectorResponse,
    } as QueryAllApprovedCollectorResponse;
    message.approvedCollector = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvedCollector.push(
            ApprovedCollector.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllApprovedCollectorResponse {
    const message = {
      ...baseQueryAllApprovedCollectorResponse,
    } as QueryAllApprovedCollectorResponse;
    message.approvedCollector = [];
    if (
      object.approvedCollector !== undefined &&
      object.approvedCollector !== null
    ) {
      for (const e of object.approvedCollector) {
        message.approvedCollector.push(ApprovedCollector.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApprovedCollectorResponse): unknown {
    const obj: any = {};
    if (message.approvedCollector) {
      obj.approvedCollector = message.approvedCollector.map((e) =>
        e ? ApprovedCollector.toJSON(e) : undefined
      );
    } else {
      obj.approvedCollector = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApprovedCollectorResponse>
  ): QueryAllApprovedCollectorResponse {
    const message = {
      ...baseQueryAllApprovedCollectorResponse,
    } as QueryAllApprovedCollectorResponse;
    message.approvedCollector = [];
    if (
      object.approvedCollector !== undefined &&
      object.approvedCollector !== null
    ) {
      for (const e of object.approvedCollector) {
        message.approvedCollector.push(ApprovedCollector.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCreditRequest: object = { index: "" };

export const QueryGetCreditRequest = {
  encode(
    message: QueryGetCreditRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreditRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCreditRequest } as QueryGetCreditRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCreditRequest {
    const message = { ...baseQueryGetCreditRequest } as QueryGetCreditRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCreditRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCreditRequest>
  ): QueryGetCreditRequest {
    const message = { ...baseQueryGetCreditRequest } as QueryGetCreditRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCreditResponse: object = {};

export const QueryGetCreditResponse = {
  encode(
    message: QueryGetCreditResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.credit !== undefined) {
      Credit.encode(message.credit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreditResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCreditResponse } as QueryGetCreditResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credit = Credit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCreditResponse {
    const message = { ...baseQueryGetCreditResponse } as QueryGetCreditResponse;
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Credit.fromJSON(object.credit);
    } else {
      message.credit = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCreditResponse): unknown {
    const obj: any = {};
    message.credit !== undefined &&
      (obj.credit = message.credit ? Credit.toJSON(message.credit) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCreditResponse>
  ): QueryGetCreditResponse {
    const message = { ...baseQueryGetCreditResponse } as QueryGetCreditResponse;
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Credit.fromPartial(object.credit);
    } else {
      message.credit = undefined;
    }
    return message;
  },
};

const baseQueryAllCreditRequest: object = {};

export const QueryAllCreditRequest = {
  encode(
    message: QueryAllCreditRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreditRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCreditRequest } as QueryAllCreditRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCreditRequest {
    const message = { ...baseQueryAllCreditRequest } as QueryAllCreditRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCreditRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCreditRequest>
  ): QueryAllCreditRequest {
    const message = { ...baseQueryAllCreditRequest } as QueryAllCreditRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCreditResponse: object = {};

export const QueryAllCreditResponse = {
  encode(
    message: QueryAllCreditResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.credit) {
      Credit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreditResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCreditResponse } as QueryAllCreditResponse;
    message.credit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credit.push(Credit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCreditResponse {
    const message = { ...baseQueryAllCreditResponse } as QueryAllCreditResponse;
    message.credit = [];
    if (object.credit !== undefined && object.credit !== null) {
      for (const e of object.credit) {
        message.credit.push(Credit.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCreditResponse): unknown {
    const obj: any = {};
    if (message.credit) {
      obj.credit = message.credit.map((e) =>
        e ? Credit.toJSON(e) : undefined
      );
    } else {
      obj.credit = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCreditResponse>
  ): QueryAllCreditResponse {
    const message = { ...baseQueryAllCreditResponse } as QueryAllCreditResponse;
    message.credit = [];
    if (object.credit !== undefined && object.credit !== null) {
      for (const e of object.credit) {
        message.credit.push(Credit.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Issuer by index. */
  Issuer(request: QueryGetIssuerRequest): Promise<QueryGetIssuerResponse>;
  /** Queries a list of Issuer items. */
  IssuerAll(request: QueryAllIssuerRequest): Promise<QueryAllIssuerResponse>;
  /** Queries a ApprovedCollector by index. */
  ApprovedCollector(
    request: QueryGetApprovedCollectorRequest
  ): Promise<QueryGetApprovedCollectorResponse>;
  /** Queries a list of ApprovedCollector items. */
  ApprovedCollectorAll(
    request: QueryAllApprovedCollectorRequest
  ): Promise<QueryAllApprovedCollectorResponse>;
  /** Queries a Credit by index. */
  Credit(request: QueryGetCreditRequest): Promise<QueryGetCreditResponse>;
  /** Queries a list of Credit items. */
  CreditAll(request: QueryAllCreditRequest): Promise<QueryAllCreditResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Issuer(request: QueryGetIssuerRequest): Promise<QueryGetIssuerResponse> {
    const data = QueryGetIssuerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "Issuer",
      data
    );
    return promise.then((data) =>
      QueryGetIssuerResponse.decode(new Reader(data))
    );
  }

  IssuerAll(request: QueryAllIssuerRequest): Promise<QueryAllIssuerResponse> {
    const data = QueryAllIssuerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "IssuerAll",
      data
    );
    return promise.then((data) =>
      QueryAllIssuerResponse.decode(new Reader(data))
    );
  }

  ApprovedCollector(
    request: QueryGetApprovedCollectorRequest
  ): Promise<QueryGetApprovedCollectorResponse> {
    const data = QueryGetApprovedCollectorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "ApprovedCollector",
      data
    );
    return promise.then((data) =>
      QueryGetApprovedCollectorResponse.decode(new Reader(data))
    );
  }

  ApprovedCollectorAll(
    request: QueryAllApprovedCollectorRequest
  ): Promise<QueryAllApprovedCollectorResponse> {
    const data = QueryAllApprovedCollectorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "ApprovedCollectorAll",
      data
    );
    return promise.then((data) =>
      QueryAllApprovedCollectorResponse.decode(new Reader(data))
    );
  }

  Credit(request: QueryGetCreditRequest): Promise<QueryGetCreditResponse> {
    const data = QueryGetCreditRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "Credit",
      data
    );
    return promise.then((data) =>
      QueryGetCreditResponse.decode(new Reader(data))
    );
  }

  CreditAll(request: QueryAllCreditRequest): Promise<QueryAllCreditResponse> {
    const data = QueryAllCreditRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.plasticcredits.Query",
      "CreditAll",
      data
    );
    return promise.then((data) =>
      QueryAllCreditResponse.decode(new Reader(data))
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
