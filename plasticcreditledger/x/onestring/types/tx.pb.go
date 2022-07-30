// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: onestring/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type MsgCreateThestring struct {
	Creator          string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Valueofthestring string `protobuf:"bytes,2,opt,name=valueofthestring,proto3" json:"valueofthestring,omitempty"`
}

func (m *MsgCreateThestring) Reset()         { *m = MsgCreateThestring{} }
func (m *MsgCreateThestring) String() string { return proto.CompactTextString(m) }
func (*MsgCreateThestring) ProtoMessage()    {}
func (*MsgCreateThestring) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{0}
}
func (m *MsgCreateThestring) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateThestring) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateThestring.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateThestring) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateThestring.Merge(m, src)
}
func (m *MsgCreateThestring) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateThestring) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateThestring.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateThestring proto.InternalMessageInfo

func (m *MsgCreateThestring) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCreateThestring) GetValueofthestring() string {
	if m != nil {
		return m.Valueofthestring
	}
	return ""
}

type MsgCreateThestringResponse struct {
}

func (m *MsgCreateThestringResponse) Reset()         { *m = MsgCreateThestringResponse{} }
func (m *MsgCreateThestringResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateThestringResponse) ProtoMessage()    {}
func (*MsgCreateThestringResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{1}
}
func (m *MsgCreateThestringResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateThestringResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateThestringResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateThestringResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateThestringResponse.Merge(m, src)
}
func (m *MsgCreateThestringResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateThestringResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateThestringResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateThestringResponse proto.InternalMessageInfo

type MsgUpdateThestring struct {
	Creator          string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Valueofthestring string `protobuf:"bytes,2,opt,name=valueofthestring,proto3" json:"valueofthestring,omitempty"`
}

func (m *MsgUpdateThestring) Reset()         { *m = MsgUpdateThestring{} }
func (m *MsgUpdateThestring) String() string { return proto.CompactTextString(m) }
func (*MsgUpdateThestring) ProtoMessage()    {}
func (*MsgUpdateThestring) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{2}
}
func (m *MsgUpdateThestring) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgUpdateThestring) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgUpdateThestring.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgUpdateThestring) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgUpdateThestring.Merge(m, src)
}
func (m *MsgUpdateThestring) XXX_Size() int {
	return m.Size()
}
func (m *MsgUpdateThestring) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgUpdateThestring.DiscardUnknown(m)
}

var xxx_messageInfo_MsgUpdateThestring proto.InternalMessageInfo

func (m *MsgUpdateThestring) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgUpdateThestring) GetValueofthestring() string {
	if m != nil {
		return m.Valueofthestring
	}
	return ""
}

type MsgUpdateThestringResponse struct {
}

func (m *MsgUpdateThestringResponse) Reset()         { *m = MsgUpdateThestringResponse{} }
func (m *MsgUpdateThestringResponse) String() string { return proto.CompactTextString(m) }
func (*MsgUpdateThestringResponse) ProtoMessage()    {}
func (*MsgUpdateThestringResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{3}
}
func (m *MsgUpdateThestringResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgUpdateThestringResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgUpdateThestringResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgUpdateThestringResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgUpdateThestringResponse.Merge(m, src)
}
func (m *MsgUpdateThestringResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgUpdateThestringResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgUpdateThestringResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgUpdateThestringResponse proto.InternalMessageInfo

type MsgDeleteThestring struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *MsgDeleteThestring) Reset()         { *m = MsgDeleteThestring{} }
func (m *MsgDeleteThestring) String() string { return proto.CompactTextString(m) }
func (*MsgDeleteThestring) ProtoMessage()    {}
func (*MsgDeleteThestring) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{4}
}
func (m *MsgDeleteThestring) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgDeleteThestring) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgDeleteThestring.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgDeleteThestring) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgDeleteThestring.Merge(m, src)
}
func (m *MsgDeleteThestring) XXX_Size() int {
	return m.Size()
}
func (m *MsgDeleteThestring) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgDeleteThestring.DiscardUnknown(m)
}

var xxx_messageInfo_MsgDeleteThestring proto.InternalMessageInfo

func (m *MsgDeleteThestring) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

type MsgDeleteThestringResponse struct {
}

func (m *MsgDeleteThestringResponse) Reset()         { *m = MsgDeleteThestringResponse{} }
func (m *MsgDeleteThestringResponse) String() string { return proto.CompactTextString(m) }
func (*MsgDeleteThestringResponse) ProtoMessage()    {}
func (*MsgDeleteThestringResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d9c1ff347fde45ee, []int{5}
}
func (m *MsgDeleteThestringResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgDeleteThestringResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgDeleteThestringResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgDeleteThestringResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgDeleteThestringResponse.Merge(m, src)
}
func (m *MsgDeleteThestringResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgDeleteThestringResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgDeleteThestringResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgDeleteThestringResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgCreateThestring)(nil), "plasticcreditledger.onestring.MsgCreateThestring")
	proto.RegisterType((*MsgCreateThestringResponse)(nil), "plasticcreditledger.onestring.MsgCreateThestringResponse")
	proto.RegisterType((*MsgUpdateThestring)(nil), "plasticcreditledger.onestring.MsgUpdateThestring")
	proto.RegisterType((*MsgUpdateThestringResponse)(nil), "plasticcreditledger.onestring.MsgUpdateThestringResponse")
	proto.RegisterType((*MsgDeleteThestring)(nil), "plasticcreditledger.onestring.MsgDeleteThestring")
	proto.RegisterType((*MsgDeleteThestringResponse)(nil), "plasticcreditledger.onestring.MsgDeleteThestringResponse")
}

func init() { proto.RegisterFile("onestring/tx.proto", fileDescriptor_d9c1ff347fde45ee) }

var fileDescriptor_d9c1ff347fde45ee = []byte{
	// 278 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xca, 0xcf, 0x4b, 0x2d,
	0x2e, 0x29, 0xca, 0xcc, 0x4b, 0xd7, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92,
	0x2d, 0xc8, 0x49, 0x2c, 0x2e, 0xc9, 0x4c, 0x4e, 0x2e, 0x4a, 0x4d, 0xc9, 0x2c, 0xc9, 0x49, 0x4d,
	0x49, 0x4f, 0x2d, 0xd2, 0x83, 0xab, 0x93, 0x92, 0x44, 0xd2, 0x92, 0x01, 0x65, 0x41, 0x74, 0x2a,
	0x45, 0x71, 0x09, 0xf9, 0x16, 0xa7, 0x3b, 0x17, 0xa5, 0x26, 0x96, 0xa4, 0x86, 0xc0, 0xe4, 0x84,
	0x24, 0xb8, 0xd8, 0x93, 0x41, 0x42, 0xf9, 0x45, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x30,
	0xae, 0x90, 0x16, 0x97, 0x40, 0x59, 0x62, 0x4e, 0x69, 0x6a, 0x7e, 0x1a, 0xdc, 0x24, 0x09, 0x26,
	0xb0, 0x12, 0x0c, 0x71, 0x25, 0x19, 0x2e, 0x29, 0x4c, 0xb3, 0x83, 0x52, 0x8b, 0x0b, 0xf2, 0xf3,
	0x8a, 0x53, 0xa1, 0x36, 0x87, 0x16, 0xa4, 0xd0, 0xcc, 0x66, 0x34, 0xb3, 0xe1, 0x36, 0xeb, 0x81,
	0x6d, 0x76, 0x49, 0xcd, 0x49, 0x25, 0xca, 0x66, 0xa8, 0x69, 0x68, 0xea, 0x61, 0xa6, 0x19, 0x75,
	0x30, 0x73, 0x31, 0xfb, 0x16, 0xa7, 0x0b, 0xd5, 0x73, 0xf1, 0xa3, 0x07, 0xa3, 0xa1, 0x1e, 0xde,
	0x78, 0xd1, 0xc3, 0x0c, 0x1d, 0x29, 0x4b, 0x92, 0xb5, 0xc0, 0x1c, 0x02, 0x72, 0x00, 0x7a, 0x68,
	0x12, 0xe1, 0x00, 0x34, 0x2d, 0xc4, 0x38, 0x00, 0x47, 0xb8, 0x82, 0x1c, 0x80, 0x1e, 0xa8, 0x44,
	0x38, 0x00, 0x4d, 0x0b, 0x31, 0x0e, 0xc0, 0x11, 0x15, 0x4e, 0xf6, 0x27, 0x1e, 0xc9, 0x31, 0x5e,
	0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7, 0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31,
	0xdc, 0x78, 0x2c, 0xc7, 0x10, 0xa5, 0x8a, 0xc5, 0x4c, 0xfd, 0x0a, 0x7d, 0xa4, 0x7c, 0x51, 0x59,
	0x90, 0x5a, 0x9c, 0xc4, 0x06, 0xce, 0x14, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x1e, 0x92,
	0xda, 0xcb, 0x64, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	CreateThestring(ctx context.Context, in *MsgCreateThestring, opts ...grpc.CallOption) (*MsgCreateThestringResponse, error)
	UpdateThestring(ctx context.Context, in *MsgUpdateThestring, opts ...grpc.CallOption) (*MsgUpdateThestringResponse, error)
	DeleteThestring(ctx context.Context, in *MsgDeleteThestring, opts ...grpc.CallOption) (*MsgDeleteThestringResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) CreateThestring(ctx context.Context, in *MsgCreateThestring, opts ...grpc.CallOption) (*MsgCreateThestringResponse, error) {
	out := new(MsgCreateThestringResponse)
	err := c.cc.Invoke(ctx, "/plasticcreditledger.onestring.Msg/CreateThestring", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) UpdateThestring(ctx context.Context, in *MsgUpdateThestring, opts ...grpc.CallOption) (*MsgUpdateThestringResponse, error) {
	out := new(MsgUpdateThestringResponse)
	err := c.cc.Invoke(ctx, "/plasticcreditledger.onestring.Msg/UpdateThestring", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) DeleteThestring(ctx context.Context, in *MsgDeleteThestring, opts ...grpc.CallOption) (*MsgDeleteThestringResponse, error) {
	out := new(MsgDeleteThestringResponse)
	err := c.cc.Invoke(ctx, "/plasticcreditledger.onestring.Msg/DeleteThestring", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	CreateThestring(context.Context, *MsgCreateThestring) (*MsgCreateThestringResponse, error)
	UpdateThestring(context.Context, *MsgUpdateThestring) (*MsgUpdateThestringResponse, error)
	DeleteThestring(context.Context, *MsgDeleteThestring) (*MsgDeleteThestringResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) CreateThestring(ctx context.Context, req *MsgCreateThestring) (*MsgCreateThestringResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateThestring not implemented")
}
func (*UnimplementedMsgServer) UpdateThestring(ctx context.Context, req *MsgUpdateThestring) (*MsgUpdateThestringResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateThestring not implemented")
}
func (*UnimplementedMsgServer) DeleteThestring(ctx context.Context, req *MsgDeleteThestring) (*MsgDeleteThestringResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteThestring not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_CreateThestring_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateThestring)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateThestring(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plasticcreditledger.onestring.Msg/CreateThestring",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateThestring(ctx, req.(*MsgCreateThestring))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_UpdateThestring_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgUpdateThestring)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).UpdateThestring(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plasticcreditledger.onestring.Msg/UpdateThestring",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).UpdateThestring(ctx, req.(*MsgUpdateThestring))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_DeleteThestring_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgDeleteThestring)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).DeleteThestring(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/plasticcreditledger.onestring.Msg/DeleteThestring",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).DeleteThestring(ctx, req.(*MsgDeleteThestring))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "plasticcreditledger.onestring.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateThestring",
			Handler:    _Msg_CreateThestring_Handler,
		},
		{
			MethodName: "UpdateThestring",
			Handler:    _Msg_UpdateThestring_Handler,
		},
		{
			MethodName: "DeleteThestring",
			Handler:    _Msg_DeleteThestring_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "onestring/tx.proto",
}

func (m *MsgCreateThestring) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateThestring) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateThestring) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Valueofthestring) > 0 {
		i -= len(m.Valueofthestring)
		copy(dAtA[i:], m.Valueofthestring)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Valueofthestring)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgCreateThestringResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateThestringResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateThestringResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgUpdateThestring) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgUpdateThestring) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgUpdateThestring) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Valueofthestring) > 0 {
		i -= len(m.Valueofthestring)
		copy(dAtA[i:], m.Valueofthestring)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Valueofthestring)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgUpdateThestringResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgUpdateThestringResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgUpdateThestringResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgDeleteThestring) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgDeleteThestring) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgDeleteThestring) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgDeleteThestringResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgDeleteThestringResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgDeleteThestringResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgCreateThestring) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Valueofthestring)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgCreateThestringResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgUpdateThestring) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Valueofthestring)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgUpdateThestringResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgDeleteThestring) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgDeleteThestringResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgCreateThestring) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateThestring: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateThestring: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Valueofthestring", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Valueofthestring = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgCreateThestringResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgCreateThestringResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateThestringResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgUpdateThestring) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgUpdateThestring: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgUpdateThestring: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Valueofthestring", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Valueofthestring = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgUpdateThestringResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgUpdateThestringResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgUpdateThestringResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgDeleteThestring) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgDeleteThestring: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgDeleteThestring: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgDeleteThestringResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgDeleteThestringResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgDeleteThestringResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
