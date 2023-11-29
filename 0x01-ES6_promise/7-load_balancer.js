/**
 * Simulates a load balancer by initiating download
 * requests to servers in China and the US,
 * and returns a Promise that resolves or rejects
 * based on the first completed download.
 *
 * A Promise representing a download request to a server in China.
 * @param {Promise} chinaDownload
 * A Promise representing a download request to a server in the US.
 * @param {Promise} USDownload
 * A Promise that resolves or rejects based on the first completed download,
 * providing the result or error of the faster download.
 * @returns {Promise}
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to resolve or reject based on the first completed download
  return Promise.race([chinaDownload, USDownload]);
}
