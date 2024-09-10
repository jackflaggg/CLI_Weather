export interface APIError extends Error {
    response?: {
        status: number;
        data?: unknown; // Дополнительная информация о данных
    };
}

export function isAPIError(error: any): error is APIError {
    return error && typeof error === 'object' && 'response' in error;
}