import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showThankYou, setShowThankYou] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  // Available coupons
  const availableCoupons = {
    'WEEKEND20': { discount: 20, description: '20% off on weekends' },
    'FIRST15': { discount: 15, description: '15% off for first order' },
    'BIRYANI100': { discount: 10, description: '10% off on Biryani' },
    'FAMILY25': { discount: 25, description: '25% off on family orders' },
    'NEHA10': { discount: 10, description: '10% off on your order' },
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
        setShowPayment(false);
        setShowThankYou(false);
        setCouponApplied(false);
        setDiscount(0);
        setCouponCode('');
        setCouponError('');
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleApplyCoupon = () => {
    const coupon = couponCode.toUpperCase().trim();
    if (availableCoupons[coupon]) {
      setDiscount(availableCoupons[coupon].discount);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Please try again.');
      setDiscount(0);
      setCouponApplied(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setDiscount(0);
    setCouponApplied(false);
    setCouponError('');
  };

  const calculateDiscountedPrice = () => {
    if (discount > 0) {
      return (totalPrice * discount) / 100;
    }
    return 0;
  };

  const calculateFinalTotal = () => {
    const discountedAmount = calculateDiscountedPrice();
    const deliveryFee = cart.length > 0 ? 49 : 0;
    return totalPrice - discountedAmount + deliveryFee;
  };

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setShowThankYou(true);
      clearCart();
      setCouponApplied(false);
      setDiscount(0);
      setCouponCode('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={() => {
          onClose();
          setShowPayment(false);
          setShowThankYou(false);
          setCouponApplied(false);
          setDiscount(0);
          setCouponCode('');
          setCouponError('');
        }} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 99999,
          animation: 'fadeIn 0.3s ease',
        }} 
      />
      
      {/* Cart Panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 'min(100%, 480px)',
        background: '#ffffff',
        padding: '1.5rem 1.2rem',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
        zIndex: 100000,
        overflowY: 'auto',
        animation: 'slideIn 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e8e0d6',
          paddingBottom: '1rem',
          marginBottom: '1.2rem',
          flexShrink: 0,
        }}>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
            fontWeight: 600,
            fontFamily: "'Playfair Display', serif",
          }}>
            <i className="fas fa-shopping-bag" style={{ color: '#b8860b' }}></i> Your Order
          </h3>
          <button 
            className="btn-sm btn-sm-outline" 
            onClick={() => {
              onClose();
              setShowPayment(false);
              setShowThankYou(false);
              setCouponApplied(false);
              setDiscount(0);
              setCouponCode('');
              setCouponError('');
            }} 
            style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Thank You Message */}
        {showThankYou ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem 1rem',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #b8860b, #8b6914)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: '#fff',
              marginBottom: '1.5rem',
              boxShadow: '0 8px 24px rgba(184, 134, 11, 0.3)',
            }}>
              <i className="fas fa-check"></i>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2rem',
              color: '#1e1e1e',
              marginBottom: '0.5rem',
            }}>
              Thank You! ✨
            </h2>
            <p style={{
              color: '#5a5a5a',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '350px',
              marginBottom: '1.5rem',
            }}>
              Your order has been placed successfully. We'll notify you when it's ready!
            </p>
            <div style={{
              background: '#f5efe8',
              padding: '1rem 1.5rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              width: '100%',
            }}>
              <p style={{ fontSize: '0.9rem', color: '#5a5a5a' }}>
                <i className="fas fa-clock" style={{ color: '#b8860b' }}></i> Estimated delivery: 30-45 min
              </p>
            </div>
            <button 
              className="btn"
              onClick={() => {
                onClose();
                setShowThankYou(false);
                setShowPayment(false);
                setCouponApplied(false);
                setDiscount(0);
                setCouponCode('');
                setCouponError('');
              }}
              style={{ width: '100%' }}
            >
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </button>
          </div>
        ) : showPayment ? (
          /* Payment Section */
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              marginBottom: '1.5rem',
            }}>
              <i className="fas fa-credit-card" style={{ color: '#b8860b' }}></i> Payment
            </h3>

            {/* Coupon Code Section */}
            <div style={{
              background: '#faf7f2',
              padding: '1rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              border: '1px solid #e8e0d6',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                  <i className="fas fa-ticket-alt" style={{ color: '#b8860b', marginRight: '8px' }}></i>
                  Have a coupon code?
                </span>
                {couponApplied ? (
                  <span style={{
                    color: '#28a745',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}>
                    <i className="fas fa-check-circle"></i> Applied!
                  </span>
                ) : null}
              </div>
              
              <div style={{
                display: 'flex',
                gap: '8px',
              }}>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  style={{
                    flex: 1,
                    padding: '0.6rem 1rem',
                    borderRadius: '12px',
                    border: couponError ? '2px solid #dc3545' : '1px solid #e0d6c8',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: "'Inter', sans-serif",
                    background: couponApplied ? '#e8e8e8' : '#ffffff',
                  }}
                />
                {couponApplied ? (
                  <button
                    onClick={handleRemoveCoupon}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '12px',
                      border: 'none',
                      background: '#dc3545',
                      color: '#fff',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#c82333'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#dc3545'}
                  >
                    <i className="fas fa-times"></i> Remove
                  </button>
                ) : (
                  <button
                    onClick={handleApplyCoupon}
                    style={{
                      padding: '0.6rem 1.5rem',
                      borderRadius: '12px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #b8860b, #8b6914)',
                      color: '#fff',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 134, 11, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Apply
                  </button>
                )}
              </div>
              
              {couponError && (
                <div style={{
                  marginTop: '0.5rem',
                  color: '#dc3545',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <i className="fas fa-exclamation-circle"></i>
                  {couponError}
                </div>
              )}
              
              {couponApplied && discount > 0 && (
                <div style={{
                  marginTop: '0.5rem',
                  color: '#28a745',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <i className="fas fa-gift"></i>
                  {discount}% discount applied! You saved ₹{calculateDiscountedPrice().toFixed(2)}
                </div>
              )}

              {/* Available coupons */}
              <div style={{
                marginTop: '0.8rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
              }}>
                <span style={{ fontSize: '0.7rem', color: '#777', width: '100%' }}>
                  Available codes:
                </span>
                {Object.keys(availableCoupons).map((code) => (
                  <span
                    key={code}
                    onClick={() => {
                      if (!couponApplied) {
                        setCouponCode(code);
                      }
                    }}
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.6rem',
                      background: couponApplied ? '#e8e8e8' : '#f5efe8',
                      borderRadius: '4px',
                      cursor: couponApplied ? 'default' : 'pointer',
                      color: couponApplied ? '#999' : '#b8860b',
                      border: '1px solid #e0d6c8',
                      transition: 'all 0.2s',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                    }}
                    onMouseEnter={(e) => {
                      if (!couponApplied) {
                        e.currentTarget.style.background = '#b8860b';
                        e.currentTarget.style.color = '#fff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!couponApplied) {
                        e.currentTarget.style.background = '#f5efe8';
                        e.currentTarget.style.color = '#b8860b';
                      }
                    }}
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Select Payment Method
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: paymentMethod === 'card' ? '2px solid #b8860b' : '1px solid #e0d6c8',
                  cursor: 'pointer',
                  background: paymentMethod === 'card' ? '#faf7f2' : 'transparent',
                  transition: 'all 0.2s',
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    style={{ accentColor: '#b8860b' }}
                  />
                  <i className="fas fa-credit-card" style={{ color: '#b8860b', fontSize: '1.2rem' }}></i>
                  <span>Credit/Debit Card</span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: paymentMethod === 'upi' ? '2px solid #b8860b' : '1px solid #e0d6c8',
                  cursor: 'pointer',
                  background: paymentMethod === 'upi' ? '#faf7f2' : 'transparent',
                  transition: 'all 0.2s',
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    style={{ accentColor: '#b8860b' }}
                  />
                  <i className="fas fa-mobile-alt" style={{ color: '#b8860b', fontSize: '1.2rem' }}></i>
                  <span>UPI / Google Pay</span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: paymentMethod === 'cod' ? '2px solid #b8860b' : '1px solid #e0d6c8',
                  cursor: 'pointer',
                  background: paymentMethod === 'cod' ? '#faf7f2' : 'transparent',
                  transition: 'all 0.2s',
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    style={{ accentColor: '#b8860b' }}
                  />
                  <i className="fas fa-money-bill-wave" style={{ color: '#b8860b', fontSize: '1.2rem' }}></i>
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div style={{
              background: '#f5efe8',
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', color: '#28a745' }}>
                  <span>Discount ({discount}%)</span>
                  <span>-₹{calculateDiscountedPrice().toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span>Delivery Fee</span>
                <span>{cart.length > 0 ? '₹49' : '₹0'}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '1.1rem',
                paddingTop: '0.5rem',
                borderTop: '1px solid #d4c8b8',
                marginTop: '0.5rem',
              }}>
                <span>Total</span>
                <span style={{ color: '#b8860b' }}>₹{calculateFinalTotal().toFixed(2)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
              <button 
                className="btn btn-outline"
                onClick={() => setShowPayment(false)}
                style={{ flex: 1 }}
              >
                Back
              </button>
              <button 
                className="btn"
                onClick={handlePayment}
                disabled={processing || cart.length === 0}
                style={{ 
                  flex: 2,
                  opacity: processing || cart.length === 0 ? 0.7 : 1,
                  cursor: processing || cart.length === 0 ? 'not-allowed' : 'pointer',
                }}
              >
                {processing ? (
                  <><i className="fas fa-spinner fa-spin"></i> Processing...</>
                ) : (
                  <><i className="fas fa-lock"></i> Pay ₹{calculateFinalTotal().toFixed(2)}</>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Cart Items */
          <>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {cart.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  color: '#7a7a7a', 
                  padding: '2rem 0', 
                  fontStyle: 'italic' 
                }}>
                  <i className="fas fa-heart" style={{ color: '#b8860b', marginRight: 8 }}></i>
                  <br />
                  Your cart is empty — add some magic!
                </div>
              ) : (
                cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdate={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ flexShrink: 0, marginTop: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  fontWeight: 700,
                  margin: '1rem 0 1rem',
                  paddingTop: '0.8rem',
                  borderTop: '2px solid #e8d5b5',
                }}>
                  <span>Total</span>
                  <span style={{ color: '#b8860b' }}>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  marginTop: '0.5rem',
                }}>
                  <button 
                    className="btn" 
                    onClick={() => setShowPayment(true)}
                    style={{ width: '100%' }}
                  >
                    <i className="fas fa-credit-card"></i> Proceed to Payment
                  </button>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to clear the cart?')) {
                        clearCart();
                      }
                    }}
                    style={{ width: '100%' }}
                  >
                    <i className="fas fa-undo"></i> Clear Cart
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fa-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Cart;