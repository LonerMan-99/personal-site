interface NavigatorWithUserAgent extends Navigator {
 userAgent: string;
}

const mobileDeviceAgent = (userAgent: string): boolean => {
 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  userAgent
 );
};

export const isMobileDevice = (): boolean => {
 const navigatorWithUA = navigator as NavigatorWithUserAgent;
 const userAgent = navigatorWithUA.userAgent;

 if (mobileDeviceAgent(userAgent)) {
  return true;
 } else {
  return false;
 }
};
