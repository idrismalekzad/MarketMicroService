#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["ORderMIcrsservice/ORderMIcrsservice.csproj", "ORderMIcrsservice/"]
RUN dotnet restore "ORderMIcrsservice/ORderMIcrsservice.csproj"
COPY . .
WORKDIR "/src/ORderMIcrsservice"
RUN dotnet build "ORderMIcrsservice.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ORderMIcrsservice.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ORderMIcrsservice.dll"]