export async function convertImage(
  image: File
): Promise<string | ArrayBuffer | null> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
}
