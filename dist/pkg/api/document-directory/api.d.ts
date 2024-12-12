import { Directory, DocumentDirectoryRequestParams, DocumentDirectorySearchRequestParams, DocumentDirectorySearchResponse } from './types';
export declare const getDirectory: (params?: DocumentDirectoryRequestParams) => Promise<import('node_modules/axios/index.d.cts').AxiosResponse<Directory[], any>>;
export declare const search: (params?: DocumentDirectorySearchRequestParams) => Promise<import('node_modules/axios/index.d.cts').AxiosResponse<DocumentDirectorySearchResponse, any>>;
