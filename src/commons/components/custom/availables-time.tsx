"use client"
import Helpers from "@psi/commons/helpers"

export const AvailablesTime = () => (
  <div className="flex flex-col space-y-1">
    <h3 className="font-semibold text-base">Horários disponíveis</h3>
    <p className="text-xs text-gray-400 space-x-1">
      <strong className="text-black">Fuso horário:</strong>
      <span>{Helpers.toLocalDate(new Date(), "zzzz")}</span>
    </p>
  </div>
)
