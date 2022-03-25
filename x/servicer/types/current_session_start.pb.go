// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: servicer/current_session_start.proto

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

type CurrentSessionStart struct {
	Block BlockNum `protobuf:"bytes,1,opt,name=block,proto3" json:"block"`
}

func (m *CurrentSessionStart) Reset()         { *m = CurrentSessionStart{} }
func (m *CurrentSessionStart) String() string { return proto.CompactTextString(m) }
func (*CurrentSessionStart) ProtoMessage()    {}
func (*CurrentSessionStart) Descriptor() ([]byte, []int) {
	return fileDescriptor_cabc0994ec8b4d75, []int{0}
}
func (m *CurrentSessionStart) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CurrentSessionStart) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CurrentSessionStart.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CurrentSessionStart) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CurrentSessionStart.Merge(m, src)
}
func (m *CurrentSessionStart) XXX_Size() int {
	return m.Size()
}
func (m *CurrentSessionStart) XXX_DiscardUnknown() {
	xxx_messageInfo_CurrentSessionStart.DiscardUnknown(m)
}

var xxx_messageInfo_CurrentSessionStart proto.InternalMessageInfo

func (m *CurrentSessionStart) GetBlock() BlockNum {
	if m != nil {
		return m.Block
	}
	return BlockNum{}
}

func init() {
	proto.RegisterType((*CurrentSessionStart)(nil), "lavanet.lava.servicer.CurrentSessionStart")
}

func init() {
	proto.RegisterFile("servicer/current_session_start.proto", fileDescriptor_cabc0994ec8b4d75)
}

var fileDescriptor_cabc0994ec8b4d75 = []byte{
	// 211 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x29, 0x4e, 0x2d, 0x2a,
	0xcb, 0x4c, 0x4e, 0x2d, 0xd2, 0x4f, 0x2e, 0x2d, 0x2a, 0x4a, 0xcd, 0x2b, 0x89, 0x2f, 0x4e, 0x2d,
	0x2e, 0xce, 0xcc, 0xcf, 0x8b, 0x2f, 0x2e, 0x49, 0x2c, 0x2a, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0xcd, 0x49, 0x2c, 0x4b, 0xcc, 0x4b, 0x2d, 0xd1, 0x03, 0xd1, 0x7a, 0x30, 0x2d, 0x52,
	0x12, 0x70, 0xcd, 0x49, 0x39, 0xf9, 0xc9, 0xd9, 0xf1, 0x79, 0xa5, 0xb9, 0x10, 0x0d, 0x52, 0x22,
	0xe9, 0xf9, 0xe9, 0xf9, 0x60, 0xa6, 0x3e, 0x88, 0x05, 0x11, 0x55, 0x0a, 0xe2, 0x12, 0x76, 0x86,
	0xd8, 0x12, 0x0c, 0xb1, 0x24, 0x18, 0x64, 0x87, 0x90, 0x35, 0x17, 0x2b, 0x58, 0xbf, 0x04, 0xa3,
	0x02, 0xa3, 0x06, 0xb7, 0x91, 0xbc, 0x1e, 0x56, 0xdb, 0xf4, 0x9c, 0x40, 0x6a, 0xfc, 0x4a, 0x73,
	0x9d, 0x58, 0x4e, 0xdc, 0x93, 0x67, 0x08, 0x82, 0xe8, 0x71, 0x72, 0x3a, 0xf1, 0x48, 0x8e, 0xf1,
	0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e,
	0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0x8d, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc,
	0x5c, 0x7d, 0xa8, 0x89, 0x60, 0x5a, 0xbf, 0x42, 0x1f, 0xee, 0xee, 0x92, 0xca, 0x82, 0xd4, 0xe2,
	0x24, 0x36, 0xb0, 0xf3, 0x8c, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0xd9, 0xd8, 0x45, 0x0f, 0x0d,
	0x01, 0x00, 0x00,
}

func (m *CurrentSessionStart) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CurrentSessionStart) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CurrentSessionStart) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Block.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintCurrentSessionStart(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintCurrentSessionStart(dAtA []byte, offset int, v uint64) int {
	offset -= sovCurrentSessionStart(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *CurrentSessionStart) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Block.Size()
	n += 1 + l + sovCurrentSessionStart(uint64(l))
	return n
}

func sovCurrentSessionStart(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCurrentSessionStart(x uint64) (n int) {
	return sovCurrentSessionStart(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *CurrentSessionStart) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCurrentSessionStart
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
			return fmt.Errorf("proto: CurrentSessionStart: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CurrentSessionStart: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Block", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCurrentSessionStart
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
				return ErrInvalidLengthCurrentSessionStart
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthCurrentSessionStart
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Block.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipCurrentSessionStart(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCurrentSessionStart
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
func skipCurrentSessionStart(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCurrentSessionStart
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
					return 0, ErrIntOverflowCurrentSessionStart
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
					return 0, ErrIntOverflowCurrentSessionStart
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
				return 0, ErrInvalidLengthCurrentSessionStart
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCurrentSessionStart
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCurrentSessionStart
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCurrentSessionStart        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCurrentSessionStart          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCurrentSessionStart = fmt.Errorf("proto: unexpected end of group")
)