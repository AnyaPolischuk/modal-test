export const formatPhoneNumber = (phone) => {
  let phoneNumber = phone.replace(/[^\d]/g, '');
  const phoneLength = phoneNumber.length;

  if (phoneLength < 1) {
    return `+7 ${phoneNumber}`;
  }
  
  if (phoneLength < 7) {
    return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4)}`;
  } 
  
  if (phoneLength < 9) {
    return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
  } 
    
  return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
}