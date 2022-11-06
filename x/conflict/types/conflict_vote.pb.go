// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: conflict/conflict_vote.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
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

type Provider struct {
	Account  string `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	Response []byte `protobuf:"bytes,2,opt,name=response,proto3" json:"response,omitempty"`
}

func (m *Provider) Reset()         { *m = Provider{} }
func (m *Provider) String() string { return proto.CompactTextString(m) }
func (*Provider) ProtoMessage()    {}
func (*Provider) Descriptor() ([]byte, []int) {
	return fileDescriptor_c5ff6a0d8edaa7f1, []int{0}
}
func (m *Provider) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Provider) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Provider.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Provider) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Provider.Merge(m, src)
}
func (m *Provider) XXX_Size() int {
	return m.Size()
}
func (m *Provider) XXX_DiscardUnknown() {
	xxx_messageInfo_Provider.DiscardUnknown(m)
}

var xxx_messageInfo_Provider proto.InternalMessageInfo

func (m *Provider) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *Provider) GetResponse() []byte {
	if m != nil {
		return m.Response
	}
	return nil
}

type Vote struct {
	Address string `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Hash    []byte `protobuf:"bytes,2,opt,name=Hash,proto3" json:"Hash,omitempty"`
	Result  int64  `protobuf:"varint,3,opt,name=Result,proto3" json:"Result,omitempty"`
}

func (m *Vote) Reset()         { *m = Vote{} }
func (m *Vote) String() string { return proto.CompactTextString(m) }
func (*Vote) ProtoMessage()    {}
func (*Vote) Descriptor() ([]byte, []int) {
	return fileDescriptor_c5ff6a0d8edaa7f1, []int{1}
}
func (m *Vote) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Vote) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Vote.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Vote) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Vote.Merge(m, src)
}
func (m *Vote) XXX_Size() int {
	return m.Size()
}
func (m *Vote) XXX_DiscardUnknown() {
	xxx_messageInfo_Vote.DiscardUnknown(m)
}

var xxx_messageInfo_Vote proto.InternalMessageInfo

func (m *Vote) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Vote) GetHash() []byte {
	if m != nil {
		return m.Hash
	}
	return nil
}

func (m *Vote) GetResult() int64 {
	if m != nil {
		return m.Result
	}
	return 0
}

type ConflictVote struct {
	Index          string   `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	ClientAddress  string   `protobuf:"bytes,2,opt,name=clientAddress,proto3" json:"clientAddress,omitempty"`
	VoteDeadline   uint64   `protobuf:"varint,3,opt,name=voteDeadline,proto3" json:"voteDeadline,omitempty"`
	VoteStartBlock uint64   `protobuf:"varint,4,opt,name=voteStartBlock,proto3" json:"voteStartBlock,omitempty"`
	VoteState      int64    `protobuf:"varint,5,opt,name=voteState,proto3" json:"voteState,omitempty"`
	ChainID        string   `protobuf:"bytes,6,opt,name=chainID,proto3" json:"chainID,omitempty"`
	ApiUrl         string   `protobuf:"bytes,7,opt,name=apiUrl,proto3" json:"apiUrl,omitempty"`
	RequestData    []byte   `protobuf:"bytes,8,opt,name=requestData,proto3" json:"requestData,omitempty"`
	RequestBlock   uint64   `protobuf:"varint,9,opt,name=requestBlock,proto3" json:"requestBlock,omitempty"`
	FirstProvider  Provider `protobuf:"bytes,10,opt,name=firstProvider,proto3" json:"firstProvider"`
	SecondProvider Provider `protobuf:"bytes,11,opt,name=secondProvider,proto3" json:"secondProvider"`
	Votes          []Vote   `protobuf:"bytes,12,rep,name=votes,proto3" json:"votes"`
}

func (m *ConflictVote) Reset()         { *m = ConflictVote{} }
func (m *ConflictVote) String() string { return proto.CompactTextString(m) }
func (*ConflictVote) ProtoMessage()    {}
func (*ConflictVote) Descriptor() ([]byte, []int) {
	return fileDescriptor_c5ff6a0d8edaa7f1, []int{2}
}
func (m *ConflictVote) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ConflictVote) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ConflictVote.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ConflictVote) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ConflictVote.Merge(m, src)
}
func (m *ConflictVote) XXX_Size() int {
	return m.Size()
}
func (m *ConflictVote) XXX_DiscardUnknown() {
	xxx_messageInfo_ConflictVote.DiscardUnknown(m)
}

var xxx_messageInfo_ConflictVote proto.InternalMessageInfo

func (m *ConflictVote) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *ConflictVote) GetClientAddress() string {
	if m != nil {
		return m.ClientAddress
	}
	return ""
}

func (m *ConflictVote) GetVoteDeadline() uint64 {
	if m != nil {
		return m.VoteDeadline
	}
	return 0
}

func (m *ConflictVote) GetVoteStartBlock() uint64 {
	if m != nil {
		return m.VoteStartBlock
	}
	return 0
}

func (m *ConflictVote) GetVoteState() int64 {
	if m != nil {
		return m.VoteState
	}
	return 0
}

func (m *ConflictVote) GetChainID() string {
	if m != nil {
		return m.ChainID
	}
	return ""
}

func (m *ConflictVote) GetApiUrl() string {
	if m != nil {
		return m.ApiUrl
	}
	return ""
}

func (m *ConflictVote) GetRequestData() []byte {
	if m != nil {
		return m.RequestData
	}
	return nil
}

func (m *ConflictVote) GetRequestBlock() uint64 {
	if m != nil {
		return m.RequestBlock
	}
	return 0
}

func (m *ConflictVote) GetFirstProvider() Provider {
	if m != nil {
		return m.FirstProvider
	}
	return Provider{}
}

func (m *ConflictVote) GetSecondProvider() Provider {
	if m != nil {
		return m.SecondProvider
	}
	return Provider{}
}

func (m *ConflictVote) GetVotes() []Vote {
	if m != nil {
		return m.Votes
	}
	return nil
}

func init() {
	proto.RegisterType((*Provider)(nil), "lavanet.lava.conflict.Provider")
	proto.RegisterType((*Vote)(nil), "lavanet.lava.conflict.Vote")
	proto.RegisterType((*ConflictVote)(nil), "lavanet.lava.conflict.ConflictVote")
}

func init() { proto.RegisterFile("conflict/conflict_vote.proto", fileDescriptor_c5ff6a0d8edaa7f1) }

var fileDescriptor_c5ff6a0d8edaa7f1 = []byte{
	// 450 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0xc1, 0x6e, 0x13, 0x31,
	0x10, 0xcd, 0x36, 0x9b, 0x34, 0x99, 0xa4, 0x3d, 0x58, 0x05, 0x59, 0xa5, 0xda, 0xae, 0x22, 0x84,
	0xf6, 0xb4, 0x91, 0xca, 0x81, 0x2b, 0x84, 0x1c, 0x40, 0x80, 0x84, 0x16, 0xc1, 0x81, 0x0b, 0x72,
	0xbd, 0xd3, 0xc4, 0x62, 0xb1, 0x83, 0xed, 0x44, 0xe5, 0xc8, 0x1f, 0xf0, 0x59, 0x3d, 0xf6, 0xc8,
	0x09, 0xa1, 0xe4, 0x47, 0x90, 0xbd, 0xde, 0xd0, 0x54, 0x70, 0xe8, 0xc9, 0xf3, 0x9e, 0xdf, 0x3c,
	0xcf, 0x8c, 0x6d, 0x38, 0xe1, 0x4a, 0x5e, 0x54, 0x82, 0xdb, 0x71, 0x13, 0x7c, 0x5a, 0x29, 0x8b,
	0xf9, 0x42, 0x2b, 0xab, 0xc8, 0xbd, 0x8a, 0xad, 0x98, 0x44, 0x9b, 0xbb, 0x35, 0x6f, 0x14, 0xc7,
	0x47, 0x33, 0x35, 0x53, 0x5e, 0x31, 0x76, 0x51, 0x2d, 0x1e, 0x3d, 0x85, 0xde, 0x5b, 0xad, 0x56,
	0xa2, 0x44, 0x4d, 0x28, 0xec, 0x33, 0xce, 0xd5, 0x52, 0x5a, 0x1a, 0xa5, 0x51, 0xd6, 0x2f, 0x1a,
	0x48, 0x8e, 0xa1, 0xa7, 0xd1, 0x2c, 0x94, 0x34, 0x48, 0xf7, 0xd2, 0x28, 0x1b, 0x16, 0x5b, 0x3c,
	0x7a, 0x0d, 0xf1, 0x07, 0x65, 0xd1, 0x67, 0x97, 0xa5, 0x46, 0x63, 0xb6, 0xd9, 0x35, 0x24, 0x04,
	0xe2, 0x17, 0xcc, 0xcc, 0x43, 0xa6, 0x8f, 0xc9, 0x7d, 0xe8, 0x16, 0x68, 0x96, 0x95, 0xa5, 0xed,
	0x34, 0xca, 0xda, 0x45, 0x40, 0xa3, 0xef, 0x31, 0x0c, 0x9f, 0x87, 0x92, 0xbd, 0xed, 0x11, 0x74,
	0x84, 0x2c, 0xf1, 0x32, 0x98, 0xd6, 0x80, 0x3c, 0x84, 0x03, 0x5e, 0x09, 0x94, 0xf6, 0x59, 0x38,
	0x72, 0xcf, 0xef, 0xee, 0x92, 0x64, 0x04, 0x43, 0x37, 0x97, 0x29, 0xb2, 0xb2, 0x12, 0x12, 0xfd,
	0x51, 0x71, 0xb1, 0xc3, 0x91, 0x47, 0x70, 0xe8, 0xf0, 0x3b, 0xcb, 0xb4, 0x9d, 0x54, 0x8a, 0x7f,
	0xa6, 0xb1, 0x57, 0xdd, 0x62, 0xc9, 0x09, 0xf4, 0x03, 0x63, 0x91, 0x76, 0x7c, 0xcd, 0x7f, 0x09,
	0xd7, 0x3c, 0x9f, 0x33, 0x21, 0x5f, 0x4e, 0x69, 0xb7, 0x6e, 0x3e, 0x40, 0xd7, 0x28, 0x5b, 0x88,
	0xf7, 0xba, 0xa2, 0xfb, 0x7e, 0x23, 0x20, 0x92, 0xc2, 0x40, 0xe3, 0xd7, 0x25, 0x1a, 0x3b, 0x65,
	0x96, 0xd1, 0x9e, 0x9f, 0xcd, 0x4d, 0xca, 0x55, 0x1f, 0x60, 0x5d, 0x57, 0xbf, 0xae, 0xfe, 0x26,
	0x47, 0x5e, 0xc1, 0xc1, 0x85, 0xd0, 0xc6, 0x36, 0x77, 0x48, 0x21, 0x8d, 0xb2, 0xc1, 0xd9, 0x69,
	0xfe, 0xcf, 0x37, 0x90, 0x37, 0xb2, 0x49, 0x7c, 0xf5, 0xeb, 0xb4, 0x55, 0xec, 0xe6, 0x92, 0x37,
	0x70, 0x68, 0x90, 0x2b, 0x59, 0x6e, 0xdd, 0x06, 0x77, 0x71, 0xbb, 0x95, 0x4c, 0x9e, 0x40, 0xc7,
	0x0d, 0xc8, 0xd0, 0x61, 0xda, 0xce, 0x06, 0x67, 0x0f, 0xfe, 0xe3, 0xe2, 0x6e, 0x39, 0x38, 0xd4,
	0xfa, 0xc9, 0xe4, 0x6a, 0x9d, 0x44, 0xd7, 0xeb, 0x24, 0xfa, 0xbd, 0x4e, 0xa2, 0x1f, 0x9b, 0xa4,
	0x75, 0xbd, 0x49, 0x5a, 0x3f, 0x37, 0x49, 0xeb, 0x63, 0x36, 0x13, 0x76, 0xbe, 0x3c, 0xcf, 0xb9,
	0xfa, 0x32, 0x0e, 0x6e, 0x7e, 0x1d, 0x5f, 0x6e, 0x7f, 0xc2, 0xd8, 0x7e, 0x5b, 0xa0, 0x39, 0xef,
	0xfa, 0xe7, 0xfd, 0xf8, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x61, 0x6f, 0x94, 0x8c, 0x2b, 0x03,
	0x00, 0x00,
}

func (m *Provider) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Provider) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Provider) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Response) > 0 {
		i -= len(m.Response)
		copy(dAtA[i:], m.Response)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.Response)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Account) > 0 {
		i -= len(m.Account)
		copy(dAtA[i:], m.Account)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.Account)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Vote) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Vote) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Vote) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Result != 0 {
		i = encodeVarintConflictVote(dAtA, i, uint64(m.Result))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Hash) > 0 {
		i -= len(m.Hash)
		copy(dAtA[i:], m.Hash)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.Hash)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ConflictVote) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ConflictVote) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ConflictVote) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Votes) > 0 {
		for iNdEx := len(m.Votes) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Votes[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintConflictVote(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x62
		}
	}
	{
		size, err := m.SecondProvider.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintConflictVote(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x5a
	{
		size, err := m.FirstProvider.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintConflictVote(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x52
	if m.RequestBlock != 0 {
		i = encodeVarintConflictVote(dAtA, i, uint64(m.RequestBlock))
		i--
		dAtA[i] = 0x48
	}
	if len(m.RequestData) > 0 {
		i -= len(m.RequestData)
		copy(dAtA[i:], m.RequestData)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.RequestData)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.ApiUrl) > 0 {
		i -= len(m.ApiUrl)
		copy(dAtA[i:], m.ApiUrl)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.ApiUrl)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.ChainID) > 0 {
		i -= len(m.ChainID)
		copy(dAtA[i:], m.ChainID)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.ChainID)))
		i--
		dAtA[i] = 0x32
	}
	if m.VoteState != 0 {
		i = encodeVarintConflictVote(dAtA, i, uint64(m.VoteState))
		i--
		dAtA[i] = 0x28
	}
	if m.VoteStartBlock != 0 {
		i = encodeVarintConflictVote(dAtA, i, uint64(m.VoteStartBlock))
		i--
		dAtA[i] = 0x20
	}
	if m.VoteDeadline != 0 {
		i = encodeVarintConflictVote(dAtA, i, uint64(m.VoteDeadline))
		i--
		dAtA[i] = 0x18
	}
	if len(m.ClientAddress) > 0 {
		i -= len(m.ClientAddress)
		copy(dAtA[i:], m.ClientAddress)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.ClientAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintConflictVote(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintConflictVote(dAtA []byte, offset int, v uint64) int {
	offset -= sovConflictVote(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Provider) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Account)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	l = len(m.Response)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	return n
}

func (m *Vote) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	l = len(m.Hash)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	if m.Result != 0 {
		n += 1 + sovConflictVote(uint64(m.Result))
	}
	return n
}

func (m *ConflictVote) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	l = len(m.ClientAddress)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	if m.VoteDeadline != 0 {
		n += 1 + sovConflictVote(uint64(m.VoteDeadline))
	}
	if m.VoteStartBlock != 0 {
		n += 1 + sovConflictVote(uint64(m.VoteStartBlock))
	}
	if m.VoteState != 0 {
		n += 1 + sovConflictVote(uint64(m.VoteState))
	}
	l = len(m.ChainID)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	l = len(m.ApiUrl)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	l = len(m.RequestData)
	if l > 0 {
		n += 1 + l + sovConflictVote(uint64(l))
	}
	if m.RequestBlock != 0 {
		n += 1 + sovConflictVote(uint64(m.RequestBlock))
	}
	l = m.FirstProvider.Size()
	n += 1 + l + sovConflictVote(uint64(l))
	l = m.SecondProvider.Size()
	n += 1 + l + sovConflictVote(uint64(l))
	if len(m.Votes) > 0 {
		for _, e := range m.Votes {
			l = e.Size()
			n += 1 + l + sovConflictVote(uint64(l))
		}
	}
	return n
}

func sovConflictVote(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozConflictVote(x uint64) (n int) {
	return sovConflictVote(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Provider) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConflictVote
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
			return fmt.Errorf("proto: Provider: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Provider: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Account", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Account = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Response", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Response = append(m.Response[:0], dAtA[iNdEx:postIndex]...)
			if m.Response == nil {
				m.Response = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipConflictVote(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthConflictVote
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
func (m *Vote) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConflictVote
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
			return fmt.Errorf("proto: Vote: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Vote: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Hash", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Hash = append(m.Hash[:0], dAtA[iNdEx:postIndex]...)
			if m.Hash == nil {
				m.Hash = []byte{}
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Result", wireType)
			}
			m.Result = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Result |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipConflictVote(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthConflictVote
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
func (m *ConflictVote) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConflictVote
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
			return fmt.Errorf("proto: ConflictVote: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ConflictVote: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClientAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ClientAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteDeadline", wireType)
			}
			m.VoteDeadline = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.VoteDeadline |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteStartBlock", wireType)
			}
			m.VoteStartBlock = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.VoteStartBlock |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field VoteState", wireType)
			}
			m.VoteState = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.VoteState |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ChainID", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ChainID = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ApiUrl", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
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
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ApiUrl = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RequestData", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RequestData = append(m.RequestData[:0], dAtA[iNdEx:postIndex]...)
			if m.RequestData == nil {
				m.RequestData = []byte{}
			}
			iNdEx = postIndex
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field RequestBlock", wireType)
			}
			m.RequestBlock = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.RequestBlock |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field FirstProvider", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.FirstProvider.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SecondProvider", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.SecondProvider.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Votes", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConflictVote
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthConflictVote
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthConflictVote
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Votes = append(m.Votes, Vote{})
			if err := m.Votes[len(m.Votes)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipConflictVote(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthConflictVote
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
func skipConflictVote(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowConflictVote
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
					return 0, ErrIntOverflowConflictVote
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
					return 0, ErrIntOverflowConflictVote
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
				return 0, ErrInvalidLengthConflictVote
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupConflictVote
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthConflictVote
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthConflictVote        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowConflictVote          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupConflictVote = fmt.Errorf("proto: unexpected end of group")
)
