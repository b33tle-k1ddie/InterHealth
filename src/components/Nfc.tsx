import { Nfc, NfcUtils, NfcTagTechType } from '@capawesome-team/capacitor-nfc';

const createNdefTextRecord = () => {
  const utils = new NfcUtils();
  const { record } = utils.createNdefTextRecord({ text: 'Capacitor NFC Plugin' });
  return record;
};

const write = async () => {
  return new Promise((resolve) => {
    const record = createNdefTextRecord();

    Nfc.addListener('nfcTagScanned', async (event) => {
      await Nfc.write({ message: { records: [record] } });
      await Nfc.stopScanSession();
      resolve();
    });

    Nfc.startScanSession();
  });
};

const read = async () => {
  return new Promise((resolve) => {
    Nfc.addListener('nfcTagScanned', async (event) => {
      await Nfc.stopScanSession();
      resolve(event.nfcTag);
    });

    Nfc.startScanSession();
  });
};

const makeReadOnly = async () => {
  return new Promise((resolve) => {
    Nfc.addListener('nfcTagScanned', async (event) => {
      await Nfc.makeReadOnly();
      await Nfc.stopScanSession();
      resolve();
    });

    Nfc.startScanSession();
  });
};

const readSignature = async () => {
  return new Promise((resolve) => {
    Nfc.addListener('nfcTagScanned', async (event) => {
      const { response } = await Nfc.transceive({ techType: NfcTagTechType.NfcA, data: [60, 0] });
      await Nfc.stopScanSession();
      resolve(response);
    });

    Nfc.startScanSession();
  });
};

const erase = async () => {
  return new Promise((resolve) => {
    Nfc.addListener('nfcTagScanned', async (event) => {
      await Nfc.erase();
      await Nfc.stopScanSession();
      resolve();
    });

    Nfc.startScanSession();
  });
};

const format = async () => {
  return new Promise((resolve) => {
    Nfc.addListener('nfcTagScanned', async (event) => {
      await Nfc.format();
      await Nfc.stopScanSession();
      resolve();
    });

    Nfc.startScanSession();
  });
};

const isSupported = async () => {
  const { isSupported } = await Nfc.isSupported();
  return isSupported;
};

const isEnabled = async () => {
  const { isEnabled } = await Nfc.isEnabled();
  return isEnabled;
};

const openSettings = async () => {
  await Nfc.openSettings();
};

const checkPermissions = async () => {
  const { nfc } = await Nfc.checkPermissions();
  return nfc;
};

const requestPermissions = async () => {
  const { nfc } = await Nfc.requestPermissions();
  return nfc;
};

const removeAllListeners = async () => {
  await Nfc.removeAllListeners();
};