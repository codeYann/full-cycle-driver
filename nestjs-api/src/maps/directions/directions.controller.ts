import { Controller, Get, Query } from "@nestjs/common";
import { DirectionsService } from "./directions.service";

@Controller("directions")
export class DirectionsController {
  constructor(private directionsService: DirectionsService) {}

  @Get()
  getDirections(
    @Query("originId") originId,
    @Query("destinationId") destinationId,
  ) {
    return this.directionsService.getDirections(originId, destinationId);
  }
}
