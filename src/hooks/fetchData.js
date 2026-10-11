import { useEffect, useState } from "react";

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		async function fetchData() {
			setIsLoading(true);
			setErrorMessage("");

			try {
				const response = await fetch(url, {
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (error) {
				if (error.name !== "AbortError") {
					setErrorMessage(error.message);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		fetchData();

		return () => controller.abort();
	}, [url]);

	return { data, isLoading, errorMessage };
}

export default useFetch;
