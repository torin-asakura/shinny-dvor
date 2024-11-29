export abstract class StoragePort {
  abstract putObjectToS3(key: string, xml: string): Promise<void>
}
