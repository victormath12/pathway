export default function Log(logObject: any): void {
  const log: any = {
    ...logObject,
    timestamp: new Date().toLocaleString("pt-BR", {
      hour12: false,
    }),
  }

  console.log(JSON.stringify(log))
}
