#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["MarketService.Web.FrontEnd/MarketService.Web.FrontEnd.csproj", "MarketService.Web.FrontEnd/"]
RUN dotnet restore "MarketService.Web.FrontEnd/MarketService.Web.FrontEnd.csproj"
COPY . .
WORKDIR "/src/MarketService.Web.FrontEnd"
RUN dotnet build "MarketService.Web.FrontEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MarketService.Web.FrontEnd.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MarketService.Web.FrontEnd.dll"]