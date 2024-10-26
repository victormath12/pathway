"use client"

import { cn } from "@psi/commons/lib/utils"
import { useJsApiLoader } from "@react-google-maps/api"
import { useCallback, useEffect, useRef, useState } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface AddressGoogleDTO {
  long_name: string
  short_name: string
  types: string[]
}

export interface Address {
  formatted_address?: string
  router_number?: string
  route: string
  neighborhood?: string
  city?: string
  state?: string
  postal_code?: string
  country?: string
}

export function GooglePlacesAutoComplete({
  error,
  onSelected,
}: {
  error?: string
  onSelected: (address: Address | undefined) => void
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_PLACES_KEY as string,
    libraries: ["places"],
  })

  const [autoComplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete | null>(null)
  const [place, setSelectedPlace] = useState<undefined | Address>(undefined)
  const placesAutoCompleteRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isLoaded) {
      const gAutoComplete = new google.maps.places.Autocomplete(
        placesAutoCompleteRef.current as HTMLInputElement,
        {
          fields: ["formatted_address", "name", "address_components"],
          componentRestrictions: { country: "br" },
        }
      )
      setAutoComplete(gAutoComplete)
    }
  }, [isLoaded])

  const serializeAddress = useCallback(
    (args: google.maps.GeocoderAddressComponent[] | undefined) => {
      return (
        args &&
        args.reduce((acc: Address, item: AddressGoogleDTO) => {
          if (item.types.includes("street_number")) {
            acc.router_number = item.long_name ?? ""
          }

          if (item.types.includes("route")) {
            acc.route = item.short_name ?? ""
          }
          if (item.types.includes("sublocality_level_1")) {
            acc.neighborhood = item.long_name ?? ""
          }

          if (item.types.includes("administrative_area_level_2")) {
            acc.city = item.long_name ?? ""
          }

          if (item.types.includes("administrative_area_level_1")) {
            acc.state = item.long_name ?? ""
          }

          if (item.types.includes("postal_code")) {
            acc.postal_code = item.long_name ?? ""
          }

          if (item.types.includes("country")) {
            acc.country = item.short_name ?? ""
          }

          return acc
        }, {} as Address)
      )
    },
    []
  )

  useEffect(() => {
    if (autoComplete) {
      autoComplete.addListener("place_changed", () => {
        const place = autoComplete.getPlace()
        const formattedPlaces = serializeAddress(place.address_components)
        setSelectedPlace({
          ...formattedPlaces!,
          formatted_address: place.formatted_address,
        })
      })
    }
  }, [autoComplete, onSelected, serializeAddress])

  useEffect(() => {
    if (place) onSelected(place)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place])

  return (
    <div className="flex flex-col mt-6 space-y-2">
      <Label className={cn("block", error && "text-red-500")}>Endereço</Label>
      <Input ref={placesAutoCompleteRef} placeholder="Informe o seu endereço" />
      <Label
        className={cn(
          "text-xs text-gray-400",
          error && "text-red-500 text-sm mt-2 block font-medium"
        )}
      >
        {error ? error : "Exemplo: Número do Endereço, Endereço."}
      </Label>
    </div>
  )
}
