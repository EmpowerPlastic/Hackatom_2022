/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../plasticcredits/params";
import { Issuer } from "../plasticcredits/issuer";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Issuer by index. */
  Issuer(request: QueryGetIssuerRequest): Promise<QueryGetIssuerResponse>;
  /** Queries a list of Issuer items. */
  IssuerAll(request: QueryAllIssuerRequest): Promise<QueryAllIssuerResponse>;
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
