import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

class HttpRequest {
    baseUrl: string;
    queue: {
        [propName: string]: boolean;
    };

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.queue = {};
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Bearer ${localStorage.getItem('venus_at')}`, // jwt access_token
            },
            withCredentials: false, // carry cookies
        };
        return config;
    }
    destroy(url: string) {
        delete this.queue[url];
    }
    interceptors(instance: AxiosInstance, url: string) {
        instance.interceptors.request.use(
            (config: AxiosRequestConfig): AxiosRequestConfig => {
                // if (!Object.keys(this.queue).length) {
                // do something before sending requests
                // }
                this.queue[url] = true;
                return config;
            },
            (error: AxiosError): Promise<AxiosError> => {
                return Promise.reject(error);
            }
        );
        instance.interceptors.response.use(
            (res: AxiosResponse): AxiosResponse => {
                this.destroy(url);
                // do something after getting responses
                return res;
            },
            (error: AxiosError): Promise<AxiosError> => {
                this.destroy(url);
                let errorInfo: any = error.response;
                console.log(`===>`, error);
                if (!errorInfo) {
                    const {
                        request: { status },
                        config,
                    } = JSON.parse(JSON.stringify(error));
                    errorInfo = {
                        data: '',
                        status,
                        request: { responseURL: config.url },
                    };
                }

                if (!errorInfo.data) {
                    switch (errorInfo.status) {
                        case 400:
                            errorInfo.data = 'Request error (400)';
                            break;
                        case 401:
                            errorInfo.data =
                                'Unauthorized, please log in again (401)';
                            break;
                        case 403:
                            errorInfo.data = 'Access denied (403)';
                            break;
                        case 404:
                            errorInfo.data = 'Content not found (404)';
                            break;
                        case 408:
                            errorInfo.data = 'Request timeout (408)';
                            break;
                        case 500:
                            errorInfo.data = 'Server error (500)';
                            break;
                        case 501:
                            errorInfo.data = 'Service not implemented (501)';
                            break;
                        case 502:
                            errorInfo.data = 'Network error (502)';
                            break;
                        case 503:
                            errorInfo.data = 'Service unavailable (503)';
                            break;
                        case 504:
                            errorInfo.data = 'Gateway timeout(504)';
                            break;
                        case 505:
                            errorInfo.data =
                                'HTTP version is not supported(505)';
                            break;
                        default:
                            errorInfo.data = `Connection error(${errorInfo.status})!`;
                    }
                }

                if (errorInfo.status === 401) {
                    localStorage.removeItem('venus_at');
                }

                return Promise.reject(errorInfo);
            }
        );
    }
    request(options: AxiosRequestConfig) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url || '__None__');
        return instance(options);
    }
}
export default HttpRequest;
