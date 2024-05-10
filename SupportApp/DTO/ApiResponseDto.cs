namespace SupportApp.DTO
{
    public class ApiResponseDto<T>
    {
        public bool Status { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }

    }
}
