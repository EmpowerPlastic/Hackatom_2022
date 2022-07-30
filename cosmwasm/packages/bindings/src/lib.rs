mod msg;

pub use msg::PlasticMsg;

// This is a signal, such that any contract that imports these helpers will only run on the
// plastic blockchain
#[no_mangle]
extern "C" fn requires_plastic() {}