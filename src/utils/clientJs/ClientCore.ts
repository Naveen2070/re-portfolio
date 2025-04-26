import { ClientJS } from "clientjs";

const client = new ClientJS();

export function getVisitorId() {
  return client.getFingerprint();
}

export function getCPU() {
  return client.getCPU();
}

export function getOS() {
  return client.getOS();
}

export function getOSVersion() {
  return client.getOSVersion();
}

export function getBrowser() {
  return client.getBrowser();
}

export function getBrowserVersion() {
  return client.getBrowserVersion();
}

export function getLanguage() {
  return client.getLanguage();
}

export function getTimezone() {
  return client.getTimeZone();
}

export function getResolution() {
  return client.getAvailableResolution();
}
export function getAll() {
  const result = {
    visitorId: getVisitorId(),
    cpu: getCPU(),
    os: getOS(),
    osVersion: getOSVersion(),
    browser: getBrowser(),
    browserVersion: getBrowserVersion(),
    language: getLanguage(),
    timezone: getTimezone(),
    resolution: getResolution(),
    isMobile: client.isMobile(),
  };
  return result;
}
