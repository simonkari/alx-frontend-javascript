/**
 * Executes a mathematical function, captures its result
 * or error, and appends additional information.
 * Returns an array containing the result or error
 * message and a final processing message.
 *
 * A mathematical function to be executed.
 * @param {Function} mathFunction
 * An array containing the result or error message of the
 * mathFunction and a final processing message indicating
 * the guardrail was processed.
 * @returns {Array}
 */
export default function guardrail(mathFunction) {
  // Create a queue to store the result or error and processing message
  const queue = [];

  try {
    // Execute the provided mathematical function and push the result to the queue
    queue.push(mathFunction());
  } catch (err) {
    // If an error occurs during execution, push the error message to the queue
    queue.push(err.toString());
  } finally {
    // Regardless of success or failure, push a processing message to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue containing the result or error and the processing message
  return queue;
}
